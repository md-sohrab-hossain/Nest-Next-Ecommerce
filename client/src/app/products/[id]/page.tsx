import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductInteraction from "@/components/products/ProductInterection";
import { PAYMENT_METHODS } from "@/config/paymentFormConfig";
import { products } from "@/data";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ size?: string; color?: string }>;
}

const ProductDetailsPage = async ({
  params,
  searchParams,
}: ProductDetailsPageProps) => {
  const { id } = await params;
  const { size, color } = await searchParams;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return notFound();
  }

  const selectedSize =
    size && product.sizes.includes(size.toLowerCase())
      ? size.toLowerCase()
      : product.sizes[0];

  const selectedColor =
    color && product.colors.includes(color.toLowerCase())
      ? color.toLowerCase()
      : product.colors[0];

  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor as keyof typeof product.images]}
          alt={product.name}
          fill
          priority
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">
            ${product.price.toFixed(2)}
          </h2>
          <span className="text-sm text-gray-400 line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>
        </div>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          {PAYMENT_METHODS.map((method) => (
            <Image
              key={method.id}
              src={method.src}
              alt={method.alt}
              width={50}
              height={25}
              className="rounded-md"
            />
          ))}
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
