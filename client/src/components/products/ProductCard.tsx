"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { type ProductType } from "@app-types/index";
import { ROUTES } from "@/lib/routes";
import useCartStore from "@/store/cartStore";
import { toast } from "react-toastify";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedColor: productTypes.color,
      selectedSize: productTypes.size,
    });

    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      theme: "dark",
    });
  };

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white">
      {/* IMAGE */}
      <Link href={ROUTES.PRODUCT_DETAIL(product.id)}>
        <div className="relative aspect-[2/3]">
          <Image
            src={
              product.images[productTypes.color as keyof typeof product.images]
            }
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium text-gray-800 line-clamp-1">
          {product.name}
        </h1>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* SELECTORS */}
        <div className="flex items-start gap-4">
          <SizeSelector
            sizes={product.sizes}
            selectedSize={productTypes.size}
            onSelect={(size: string) =>
              handleProductType({ type: "size", value: size })
            }
          />

          <ColorSelector
            colors={product.colors}
            selectedColor={productTypes.color}
            onSelect={(color: string) =>
              handleProductType({ type: "color", value: color })
            }
          />
        </div>

        {/* PRICE AND ADD TO CART BUTTON */}
        <div className="flex items-center justify-between mt-1">
          <p className="font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="ring-1 ring-gray-200 shadow-lg rounded-md px-3 py-1.5 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2 bg-white"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
