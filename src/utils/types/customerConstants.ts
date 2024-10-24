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
  { id: 10, country: "France" }, // Remove region property entirely for countries without regions
  { id: 11, country: "Spain" },
  { id: 12, country: "Italy" },
  { id: 13, country: "Germany" },
  { id: 14, country: "Sweden" },
  { id: 15, country: "Denmark" },
  { id: 16, country: "Netherlands" },
  { id: 17, country: "Norway" },
  { id: 18, country: "Croatia" },
];
