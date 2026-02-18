import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (type: "increment" | "decrement") => void;
}

const QuantitySelector = ({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center border border-gray-200 rounded-md overflow-hidden h-11 bg-white">
      <button
        type="button"
        className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30"
        onClick={() => onQuantityChange("decrement")}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-12 text-center font-bold text-gray-800">
        {quantity}
      </span>
      <button
        type="button"
        className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors"
        onClick={() => onQuantityChange("increment")}
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;
