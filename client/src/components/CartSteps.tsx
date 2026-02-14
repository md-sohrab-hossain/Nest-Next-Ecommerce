import { CartSteps } from "@/constant";
import { ROUTES } from "@/lib/routes";
import { updateUrlQuery } from "@/lib/url";
import Link from "next/link";

type StepsProps = {
  queryKey: string;
  activeStepNum: number;
  params: Record<string, string>;
};

const Steps = ({ activeStepNum, params, queryKey }: StepsProps) => {
  return (
    <>
      {CartSteps.map((step) => {
        const isActive = step.id === activeStepNum;
        const href = updateUrlQuery(
          params,
          queryKey,
          String(step.id),
          ROUTES.CART,
        );

        return (
          <Link
            href={href}
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 cursor-pointer ${
              isActive ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                isActive ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              {step.id}
            </span>
            <span
              className={`text-sm font-medium ${isActive ? "text-gray-800" : "text-gray-200"}`}
            >
              {step.title}
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default Steps;
