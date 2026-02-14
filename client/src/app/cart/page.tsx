import { CartDetails } from "@/components/cart/CartDetails";
import { QUERY_PARAMS, ROUTE_DEFAULTS } from "@/lib/routes";
import CartSteps from "@/components/CartSteps";
import { cartItems } from "@/data";

interface CartPageProps {
  searchParams: RouteParams["searchParams"];
}

const KEY = QUERY_PARAMS.STEP;
const DEFAULT_STEP = ROUTE_DEFAULTS.DEFAULT_STEP;

const CartPage = async ({ searchParams }: CartPageProps) => {
  const params = searchParams ? await searchParams : {};
  const activeStep = parseInt((params[KEY] as string) || DEFAULT_STEP);

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>

      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <CartSteps queryKey={KEY} params={params} activeStepNum={activeStep} />
      </div>

      {/* PRODUCTS & DETAILS */}
      <div className="flex flex-col w-full lg:flex-row gap-16">
        {/* PRODUCTS */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          product
        </div>

        {/* DETAILS */}
        <CartDetails items={cartItems} currentStep={activeStep} />
      </div>
    </div>
  );
};

export default CartPage;
