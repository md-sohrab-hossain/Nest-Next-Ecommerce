import React, { Suspense } from "react";
import Categories from "./categories";
import { products } from "@/data";
import ProductCard from "./ProductCard";

const ProductList = ({ searchParams }: RouteParams) => {
  return (
    <div>
      <Suspense fallback={<div>Loading categories...</div>}>
        <Categories searchParams={searchParams} />
      </Suspense>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
