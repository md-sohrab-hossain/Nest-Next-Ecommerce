"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ROUTES } from "@/lib/routes";
import { CartActionButton } from "./CartActionButton";
import { FormField } from "./FormField";
import { SHIPPING_FORM_FIELDS } from "@/config/shippingFormConfig";
import {
  CheckoutStep,
  ShippingFormInputs,
  shippingFormSchema,
} from "../../../types";

type ShippingFormProps = {
  currentStep: number;
};

const ShippingForm = ({ currentStep }: ShippingFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const handleSubmitForm = async (data: ShippingFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Shipping Data:====", data);
    router.push(`${ROUTES.CART}?step=3`);
  };

  return (
    <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {SHIPPING_FORM_FIELDS.map((field) => (
          <FormField
            key={field.name}
            id={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            registerProps={register(field.name)}
            error={errors[field.name]?.message}
          />
        ))}

        {currentStep === CheckoutStep.SHIPPING && (
          <CartActionButton
            activeStep={currentStep}
            mode="submit"
            disabled={isSubmitting}
            loadingText="Processing..."
          />
        )}
      </form>
    </div>
  );
};

export default ShippingForm;
