"use client";

import { useRouter } from "next/navigation";

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  createQueryString?: (name: string, value: string) => string;
  onSelect?: (color: string) => void;
  showLabel?: boolean;
}

const ColorSelector = ({
  colors,
  selectedColor,
  createQueryString,
  onSelect,
  showLabel = true,
}: ColorSelectorProps) => {
  const router = useRouter();

  const handleSelect = (color: string) => {
    if (onSelect) {
      onSelect(color);
    } else if (createQueryString) {
      router.replace(createQueryString("color", color), { scroll: false });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {showLabel && (
        <span className="text-gray-500 text-xs font-medium">Colors</span>
      )}
      <div className="flex items-center gap-2">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleSelect(color)}
            className={`cursor-pointer ring-1 ${
              selectedColor === color ? "ring-gray-800" : "ring-gray-400"
            } rounded-full p-0.5 transition-all`}
          >
            <div
              className="w-[14px] h-[14px] rounded-full shadow-inner"
              style={{ backgroundColor: color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
