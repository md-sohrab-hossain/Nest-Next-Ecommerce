import { ShippingFormInputs } from "../../types";

export const SHIPPING_FORM_FIELDS: Array<{
  name: keyof ShippingFormInputs;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
}> = [
  { name: "name", label: "Name", type: "text", placeholder: "John Doe" },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "john@example.com",
  },
  { name: "phone", label: "Phone", type: "tel", placeholder: "01234567890" },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "123 Main Street",
  },
  { name: "city", label: "City", type: "text", placeholder: "New York" },
];
