"use client";

import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type FormFieldProps = {
  label: string;
  id: string;
  error?: string;
  registerProps: UseFormRegisterReturn;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "register">;

export const FormField = ({
  label,
  id,
  error,
  registerProps,
  ...inputProps
}: FormFieldProps) => {
  const { ref, ...restRegisterProps } = registerProps;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-gray-500 font-medium">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...restRegisterProps}
        {...inputProps}
        className="border-b border-gray-200 py-2 text-sm outline-none"
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
