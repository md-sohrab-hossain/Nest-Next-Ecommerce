import { CartItemType } from "@/types";
import { CartActionButton } from "./CartActionButton";
import { CheckoutStep } from "@/types/checkout";

type CartDetailsProps = {
  items: CartItemType[];
  currentStep: number;
};

export const CartDetails = ({ items, currentStep }: CartDetailsProps) => {
  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  return (
    <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
      <h2 className="font-semibold">Cart Details</h2>
      <div className="flex flex-col gap-4">
        <div className="text-sm flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="text-sm flex justify-between">
          <span className="text-gray-500">Discount (10%)</span>
          <span className="font-medium">${(subtotal * 0.1).toFixed(2)}</span>
        </div>

        <div className="text-sm flex justify-between">
          <span className="text-gray-500">Shipping Fee</span>
          <span className="font-medium">$10</span>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between">
          <span className="text-gray-800 font-semibold">Total</span>
          <span className="font-medium">
            ${(subtotal - subtotal * 0.1 + 10).toFixed(2)}
          </span>
        </div>
      </div>

      {currentStep === CheckoutStep.CART && (
        <CartActionButton activeStep={CheckoutStep.CART} />
      )}
    </div>
  );
};
