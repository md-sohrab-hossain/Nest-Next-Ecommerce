import React, { Suspense } from "react";
import Link from "next/link";
import { products } from "@/data";
import ProductCard from "./ProductCard";
import Categories from "@/components/categories";
import { ROUTES } from "@/lib/routes";
import Filter from "../Filter";

interface ProductListProps {
  pathname?: string;
  searchParams?: RouteParams["searchParams"];
}

const ProductList = async ({
  searchParams,
  pathname = "/",
}: ProductListProps) => {
  const params = await searchParams;

  // Preserve all current query params when navigating to "View All"
  const viewAllHref =
    params && Object.keys(params).length > 0
      ? { pathname: ROUTES.PRODUCTS, query: params }
      : ROUTES.PRODUCTS;

  return (
    <div>
      <Suspense fallback={<div>Loading categories...</div>}>
        <Categories searchParams={searchParams} pathname={pathname} />
      </Suspense>

      {pathname === ROUTES.PRODUCTS && <Filter />}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {pathname !== ROUTES.PRODUCTS && (
        <Link
          href={viewAllHref}
          className="flex justify-end mt-4 underline text-sm text-gray-500"
        >
          View All Products
        </Link>
      )}
    </div>
  );
};

export default ProductList;
