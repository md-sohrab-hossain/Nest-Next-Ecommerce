import ProductList from "@/components/ProductList";
import Image from "next/image";

interface HomepageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Homepage = async ({ searchParams }: HomepageProps) => {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="feature product" fill />
      </div>

      <div>
        <ProductList searchParams={resolvedSearchParams} />
      </div>
    </div>
  );
};

export default Homepage;
