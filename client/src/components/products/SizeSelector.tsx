"use client";

import { useRouter } from "next/navigation";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  createQueryString?: (name: string, value: string) => string;
  onSelect?: (size: string) => void;
  showLabel?: boolean;
}

const SizeSelector = ({
  sizes,
  selectedSize,
  createQueryString,
  onSelect,
  showLabel = true,
}: SizeSelectorProps) => {
  const router = useRouter();

  const handleChange = (value: string) => {
    if (onSelect) {
      onSelect(value);
    } else if (createQueryString) {
      router.replace(createQueryString("size", value), { scroll: false });
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {showLabel && (
        <span className="text-gray-500 text-xs font-medium">Size</span>
      )}
      <select
        name="size"
        id="size"
        value={selectedSize}
        onChange={(e) => handleChange(e.target.value)}
        className="ring-1 ring-gray-300 rounded-md px-2 py-1 text-xs bg-white cursor-pointer focus:outline-none focus:ring-black"
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
