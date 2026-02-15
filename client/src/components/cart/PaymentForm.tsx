"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { ROUTES } from "@/lib/routes";
import { CartActionButton } from "./CartActionButton";
import { FormField } from "./FormField";
import {
  PAYMENT_METHODS,
  PAYMENT_FORM_FIELDS,
} from "@/config/paymentFormConfig";
import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { CheckoutStep } from "@/types/checkout";

type PaymentFormProps = {
  currentStep: number;
};

const PaymentForm = ({ currentStep }: PaymentFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const handleSubmitForm = async (data: PaymentFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Payment Data:", data);
    router.push(ROUTES.HOME);
  };

  return (
    <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {PAYMENT_FORM_FIELDS.map((field) => (
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

        <div className="flex items-center gap-2 mt-4">
          {PAYMENT_METHODS.map((method) => (
            <Image
              key={method.id}
              src={method.src}
              alt={method.alt}
              width={50}
              height={25}
              className="rounded-md"
            />
          ))}
        </div>

        {currentStep === CheckoutStep.PAYMENT && (
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

export default PaymentForm;
