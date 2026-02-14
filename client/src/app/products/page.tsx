import ProductList from "@/components/products/ProductList";
import React from "react";
import { ROUTES } from "@/lib/routes";

const ProductsPage = async ({ searchParams }: RouteParams) => {
  return (
    <div className="py-2">
      <ProductList searchParams={searchParams} pathname={ROUTES.PRODUCTS} />
    </div>
  );
};

export default ProductsPage;
