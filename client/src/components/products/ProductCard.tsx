"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ProductType } from "../../../types";
import { ROUTES } from "@/lib/routes";
import useCartStore from "@/store/cartStore";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedColor: productType.color,
      selectedSize: productType.size,
    });

    toast.success("Product added to cart");
  };

  const handleProductTypeChange = (type: "size" | "color", value: string) => {
    setProductType((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="shadow-lg rounded-lg bg-gray-50 overflow-hidden">
      {/* IMAGE */}
      <Link href={ROUTES.PRODUCT_DETAIL(product.id)}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productType.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm">{product.shortDescription}</p>

        {/* PRODUCT TYPES */}
        <div className="flex items-start gap-4 text-xs">
          {/* SIZE */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              onChange={(e) => handleProductTypeChange("size", e.target.value)}
              className="ring ring-gray-300 rounded-md px-2 py-1"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* COLORS */}
          <div className="flex flex-col gap-2">
            <span className="text-gray-500">Colors</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer ring-1 ${
                    productType.color === color
                      ? "ring-gray-800"
                      : "ring-gray-400"
                  } rounded-full p-0.5`}
                  key={color}
                  onClick={() => handleProductTypeChange("color", color)}
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRICE AND ADD TO CART */}
        <div className="flex items-center justify-between">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
