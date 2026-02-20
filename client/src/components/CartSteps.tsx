import { Check } from "lucide-react";
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
        const isCompleted = step.id < activeStepNum;
        const isActive = step.id === activeStepNum;

        const borderColor = isActive
          ? "border-gray-800"
          : isCompleted
            ? "border-green-600"
            : "border-gray-200";

        const circleBg = isActive
          ? "bg-gray-800"
          : isCompleted
            ? "bg-green-600"
            : "bg-gray-200";

        const textColor = isActive
          ? "text-gray-800"
          : isCompleted
            ? "text-green-600"
            : "text-gray-200";

        const content = (
          <>
            <div className="relative">
              <span
                className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${circleBg}`}
              >
                {step.id}
              </span>
              {isCompleted && (
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-700 border-2 border-white rounded-full flex items-center justify-center">
                  <Check
                    className="w-2.5 h-2.5 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(completed)</span>
                </span>
              )}
            </div>
            <span className={`text-sm font-medium ${textColor}`}>
              {step.title}
            </span>
          </>
        );

        if (isCompleted) {
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
              className={`flex items-center gap-2 border-b-2 pb-4 cursor-pointer ${borderColor}`}
            >
              {content}
            </Link>
          );
        }

        return (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 cursor-default ${borderColor}`}
            aria-current={isActive ? "step" : undefined}
          >
            {content}
          </div>
        );
      })}
    </>
  );
};

export default Steps;
