import { FormFields } from "./CustomerFormFields";

export const INITIAL_FORM_STATE: FormFields = {
  username: "",
  email: "",
  phone_number: "",
  date_of_birth: "",
  street_address: "",
  password: "",
  confirm_password: "",
};

export const FORM_FIELDS = [
  { label: "Username", type: "text", name: "username" },
  { label: "Email", type: "email", name: "email" },
  { label: "Phone Number", type: "tel", name: "phone_number" },
  { label: "Date of Birth", type: "date", name: "date_of_birth" },
  { label: "Street Address", type: "text", name: "street_address" },
  { label: "Password", type: "password", name: "password" },
  { label: "Confirm Password", type: "password", name: "confirm_password" },
] as const;
