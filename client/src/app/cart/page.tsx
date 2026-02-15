import { CartDetails } from "@/components/cart/CartDetails";
import { CartItemList } from "@/components/cart/CartItemList";
import { QUERY_PARAMS, ROUTE_DEFAULTS } from "@/lib/routes";
import CartSteps from "@/components/CartSteps";
import { cartItems } from "@/data";
import ShippingForm from "@/components/cart/ShippingForm";
import PaymentForm from "@/components/cart/PaymentForm";

interface CartPageProps {
  searchParams: RouteParams["searchParams"];
}

const KEY = QUERY_PARAMS.STEP;
const DEFAULT_STEP = ROUTE_DEFAULTS.DEFAULT_STEP;

const CartPage = async ({ searchParams }: CartPageProps) => {
  const params = (await searchParams) || {};
  const activeStep = parseInt((params[KEY] as string) || DEFAULT_STEP);

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <>
            <CartItemList items={cartItems} />
            <CartDetails items={cartItems} currentStep={activeStep} />
          </>
        );
      case 2:
        return (
          <>
            <ShippingForm currentStep={activeStep} />
            <CartDetails items={cartItems} currentStep={activeStep} />
          </>
        );
      case 3:
        return (
          <>
            <PaymentForm currentStep={activeStep} />
            <CartDetails items={cartItems} currentStep={activeStep} />
          </>
        );
      default:
        return (
          <>
            <CartItemList items={cartItems} />
            <CartDetails items={cartItems} currentStep={activeStep} />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>

      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <CartSteps queryKey={KEY} params={params} activeStepNum={activeStep} />
      </div>

      {/* STEP CONTENT */}
      <div className="flex flex-col w-full lg:flex-row gap-16">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default CartPage;
