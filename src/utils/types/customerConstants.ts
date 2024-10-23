import { FormFields } from "./customerFormFields";

export const INITIAL_FORM_STATE: FormFields = {
  username: "",
  email: "",
  phone_number: "",
  date_of_birth: "",
  street_address: "",
  city: "",
  password: "",
  confirm_password: "",
  password_hash: "",
  location_id: 1,
};

export const FORM_FIELDS = [
  { label: "Username", type: "text", name: "username" },
  { label: "Email", type: "email", name: "email" },
  { label: "Phone Number", type: "tel", name: "phone_number" },
  { label: "Date of Birth", type: "date", name: "date_of_birth" },
  { label: "Street Address", type: "text", name: "street_address" },
  { label: "City", type: "text", name: "city" },
  { label: "Password", type: "password", name: "password" },
  { label: "Confirm Password", type: "password", name: "confirm_password" },
  { label: "location", type: "number", name: "location_id" },
] as const;
