import { FormFields, Location } from "../types";

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
  { id: "username", label: "Username", type: "text", name: "username" },
  { id: "email", label: "Email", type: "email", name: "email" },
  {
    id: "phone_number",
    label: "Phone Number",
    type: "tel",
    name: "phone_number",
  },
  {
    id: "date_of_birth",
    label: "Date of Birth",
    type: "date",
    name: "date_of_birth",
  },
  {
    id: "street_address",
    label: "Street Address",
    type: "text",
    name: "street_address",
  },
  { id: "city", label: "City", type: "text", name: "city" },
  { id: "password", label: "Password", type: "password", name: "password" },
  {
    id: "confirm_password",
    label: "Confirm Password",
    type: "password",
    name: "confirm_password",
  },
  { id: "location_id", label: "Location", type: "number", name: "location_id" },
] as const;

export const Locations: Location[] = [
  { id: 1, country: "United Kingdom", region: "North East" },
  { id: 2, country: "United Kingdom", region: "North West" },
  { id: 3, country: "United Kingdom", region: "Yorkshire and the Humber" },
  { id: 4, country: "United Kingdom", region: "East Midlands" },
  { id: 5, country: "United Kingdom", region: "West Midlands" },
  { id: 6, country: "United Kingdom", region: "East of England" },
  { id: 7, country: "United Kingdom", region: "London" },
  { id: 8, country: "United Kingdom", region: "South East" },
  { id: 9, country: "United Kingdom", region: "South West" },
  { id: 10, country: "France" },
  { id: 11, country: "Spain" },
  { id: 12, country: "Italy" },
  { id: 13, country: "Germany" },
  { id: 14, country: "Sweden" },
  { id: 15, country: "Denmark" },
  { id: 16, country: "Netherlands" },
  { id: 17, country: "Norway" },
  { id: 18, country: "Croatia" },
];
