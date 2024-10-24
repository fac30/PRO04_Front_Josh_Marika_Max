import React, { useState } from "react";
import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link } from "react-router-dom";
import { inputLabelClass, inputFieldClass } from "../components/common/styles";
import {
  INITIAL_FORM_STATE,
  FORM_FIELDS,
  Locations,
} from "../utils/types/customerConstants";
import hashPassword from "../hashing";
import { FormFields, UserObject } from "../utils/types";
import { fetchData } from "../utils/fetch-data";

const LocationSelect = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => (
  <select
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    className={inputFieldClass}
  >
    {Locations.map(({ id, country, region }) => (
      <option key={id} value={id}>
        {country}
        {region ? ` - ${region}` : ""}
      </option>
    ))}
  </select>
);

const SignUpForm = () => {
  const [formData, setFormData] = useState<FormFields>(INITIAL_FORM_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | number | string,
    fieldName?: string,
  ) => {
    const value =
      typeof e === "number" || typeof e === "string" ? e : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [fieldName ?? e.target.name]: value,
    }));
  };

  const createUserObject = async (): Promise<UserObject> => {
    const { confirm_password, password, ...userObject } = formData;
    userObject.password_hash = await hashPassword(password);
    return userObject as UserObject;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userObject = await createUserObject();
    await fetchData("register", "POST", userObject);
    console.log("User saved successfully.");
  };

  const renderFormField = (field: (typeof FORM_FIELDS)[number]) => {
    if (field.name === "location_id") {
      return (
        <div key={field.name} className="flex flex-col gap-2">
          <label className={inputLabelClass}>{field.label}</label>
          <LocationSelect
            value={formData.location_id}
            onChange={(value) => handleChange(value, "location_id")}
          />
        </div>
      );
    }

    return (
      <UserInput
        key={field.name}
        label={field.label}
        type={field.type}
        name={field.name}
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
        value={formData[field.name as keyof FormFields]}
        onChange={handleChange}
      />
    );
  };

  return (
    <form
      className="w-full max-w-sm mx-auto flex flex-col gap-y-4 mt-9"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      {FORM_FIELDS.map(renderFormField)}
      <SubmitButton />
      <p className="text-center text-gray-600 mt-4 mb-12">
        Already have an account?{" "}
        <Link to="/UserLogin" className="text-blue-500 hover:underline">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
