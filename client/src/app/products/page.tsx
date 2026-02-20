import type { Metadata } from "next";
import { ROUTES } from "@/lib/routes";
import ProductList from "@/components/products/ProductList";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse our full collection of premium fashion items. Find t-shirts, shoes, jackets, accessories, and more at TopTen.",
  openGraph: {
    title: "Shop All Products | TopTen",
    description:
      "Browse our full collection of premium fashion items. Find t-shirts, shoes, jackets, accessories, and more at TopTen.",
  },
};

const ProductsPage = async ({ searchParams }: RouteParams) => {
  return (
    <div className="py-2">
      <ProductList searchParams={searchParams} pathname={ROUTES.PRODUCTS} />
    </div>
  );
};

export default ProductsPage;
