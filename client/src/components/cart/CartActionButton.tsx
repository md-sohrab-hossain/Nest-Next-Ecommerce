import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";

type CartActionButtonProps = {
  activeStep: number;
  queryKey: string;
};

const BUTTON_CONFIG = {
  1: { text: "Continue to Shipping", nextStep: 2 },
  2: { text: "Continue to Payment", nextStep: 3 },
  3: { text: "Place Order", nextStep: 4 },
} as const;

export const CartActionButton = ({
  activeStep,
  queryKey,
}: CartActionButtonProps) => {
  const config = BUTTON_CONFIG[activeStep as keyof typeof BUTTON_CONFIG];

  if (!config || !config.text) {
    return null;
  }

  return (
    <Link
      href={`${ROUTES.CART}?${queryKey}=${config.nextStep}`}
      className="bg-gray-800 cursor-pointer text-white hover:bg-gray-900 transition-all rounded-lg p-2 flex items-center justify-center gap-2"
    >
      <span>{config.text}</span>
      <ArrowRight className="w-3 h-3 mt-0.5" />
    </Link>
  );
};
