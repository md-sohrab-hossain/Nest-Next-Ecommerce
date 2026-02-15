import { PaymentFormInputs } from "@/types";

export const PAYMENT_FORM_FIELDS: Array<{
  name: keyof PaymentFormInputs;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
}> = [
  {
    name: "cardHolder",
    label: "Card Holder",
    type: "text",
    placeholder: "John Doe",
  },
  {
    name: "cardNumber",
    label: "Card Number",
    type: "tel",
    placeholder: "1234567890123456",
  },
  {
    name: "expirationDate",
    label: "Expiration Date",
    type: "text",
    placeholder: "12/25",
  },
  { name: "cvv", label: "CVV", type: "tel", placeholder: "123" },
];

export const PAYMENT_METHODS = [
  { id: "klarna", src: "/klarna.png", alt: "Klarna" },
  { id: "cards", src: "/cards.png", alt: "Cards" },
  { id: "stripe", src: "/stripe.png", alt: "Stripe" },
];
