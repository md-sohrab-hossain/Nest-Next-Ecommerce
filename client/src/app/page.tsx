import ProductList from "@/components/products/ProductList";
import Image from "next/image";
import { ROUTES } from "@/lib/routes";

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
