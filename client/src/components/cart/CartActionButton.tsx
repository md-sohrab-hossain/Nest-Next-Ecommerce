import Link from "next/link";
import { ArrowRight, Loader2, ShoppingCart } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { CheckoutStep } from "../../../types";

const BUTTON_CONFIG = {
  [CheckoutStep.CART]: {
    text: "Continue to Shipping",
    nextStep: CheckoutStep.SHIPPING,
  },
  [CheckoutStep.SHIPPING]: {
    text: "Continue to Payment",
    nextStep: CheckoutStep.PAYMENT,
  },
  [CheckoutStep.PAYMENT]: {
    text: "Checkout",
    nextStep: CheckoutStep.PAYMENT,
  },
} as const satisfies Record<
  CheckoutStep,
  { text: string; nextStep: CheckoutStep }
>;

type CartActionButtonProps = {
  activeStep: CheckoutStep;
  mode?: "link" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  loadingText?: string;
};

const getButtonContent = (
  text: string,
  activeStep: number,
  isLoading: boolean,
) => {
  if (isLoading) {
    return <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />;
  }

  return (
    <>
      <span>{text}</span>
      {activeStep === CheckoutStep.PAYMENT ? (
        <ShoppingCart className="w-4 h-4" aria-hidden="true" />
      ) : (
        <ArrowRight className="w-3 h-3 mt-0.5" aria-hidden="true" />
      )}
    </>
  );
};

export const CartActionButton = ({
  activeStep,
  mode = "link",
  onClick,
  disabled = false,
  loadingText,
}: CartActionButtonProps) => {
  const config = BUTTON_CONFIG[activeStep];
  const isLoading = disabled && !!loadingText;

  if (!config) {
    return null;
  }

  const className = [
    "bg-gray-800",
    "text-white",
    "hover:bg-gray-900",
    "transition-all",
    "rounded-lg",
    "p-2",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "w-full",
    disabled
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "cursor-pointer",
  ].join(" ");

  if (mode === "link" && !disabled) {
    return (
      <Link
        href={`${ROUTES.CART}?step=${config.nextStep}`}
        className={className}
      >
        {getButtonContent(config.text, activeStep, false)}
      </Link>
    );
  }

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={className}
      aria-busy={isLoading}
      aria-disabled={disabled}
    >
      {getButtonContent(
        isLoading ? loadingText! : config.text,
        activeStep,
        isLoading,
      )}
    </button>
  );
};
