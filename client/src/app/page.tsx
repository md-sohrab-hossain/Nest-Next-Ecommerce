import type { Metadata } from "next";
import Image from "next/image";
import { ROUTES } from "@/lib/routes";
import ProductList from "@/components/products/ProductList";

export const metadata: Metadata = {
  title: { absolute: "TopTen | Premium Fashion & Apparel Store" },
  description:
    "Shop the latest fashion trends at TopTen. Browse premium t-shirts, shoes, jackets, accessories, and more at unbeatable prices.",
  openGraph: {
    title: "TopTen | Premium Fashion & Apparel Store",
    description:
      "Shop the latest fashion trends at TopTen. Browse premium t-shirts, shoes, jackets, accessories, and more at unbeatable prices.",
  },
};

const Homepage = async ({ searchParams }: RouteParams) => {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="feature product" fill />
      </div>

      <div>
        <ProductList searchParams={searchParams} pathname={ROUTES.HOME} />
      </div>
    </div>
  );
};

export default Homepage;
