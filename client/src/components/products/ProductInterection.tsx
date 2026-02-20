"use client";

import { useState } from "react";
import useCartStore from "@/store/cartStore";
import { type ProductType } from "@app-types/index";
import { Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";

interface ProductInteractionProps {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: ProductInteractionProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : Math.max(1, prev - 1),
    );
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, selectedColor, selectedSize });
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
    });
  };

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams();
    params.set("size", name === "size" ? value : selectedSize);
    params.set("color", name === "color" ? value : selectedColor);
    return `?${params.toString()}`;
  };

  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className="flex items-start gap-6">
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          createQueryString={createQueryString}
        />

        <ColorSelector
          colors={product.colors}
          selectedColor={selectedColor}
          createQueryString={createQueryString}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />

        <Button
          onClick={handleAddToCart}
          fullWidth
          className="sm:w-auto h-12 flex-1 cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add to Cart
        </Button>
      </div>

      <Link href="/checkout" className="w-full">
        <Button
          variant="outline"
          fullWidth
          className="h-12 bg-white cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          Buy this Item
        </Button>
      </Link>
    </div>
  );
};

export default ProductInteraction;
