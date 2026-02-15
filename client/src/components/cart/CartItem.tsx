"use client";

import { CartItemType } from "@/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  item: CartItemType;
  onDelete?: (id: string | number) => void;
}

export const CartItem = ({ item, onDelete }: CartItemProps) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(item.id);
    }
  };

  return (
    <div className="flex items-center justify-between">
      {/* IMAGE AND DETAILS */}
      <div className="flex gap-8">
        <div className="w-24 h-24 rounded-lg overflow-hidden relative bg-gray-50">
          <Image
            src={item.images[item.selectedColor]}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        {/* ITEM DETAILS */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
            <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
            <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
          </div>
          <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
        </div>
      </div>

      {/* DELETE BUTTON */}
      <button
        onClick={handleDelete}
        className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
      >
        <Trash2 className="w-3 h-3" />
      </button>
    </div>
  );
};
