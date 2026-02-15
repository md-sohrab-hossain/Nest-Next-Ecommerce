import React from "react";
import { ROUTES } from "@/lib/routes";
import ProductList from "@/components/products/ProductList";

const ProductsPage = async ({ searchParams }: RouteParams) => {
  return (
    <div className="py-2">
      <ProductList searchParams={searchParams} pathname={ROUTES.PRODUCTS} />
    </div>
  );
};

export default ProductsPage;
