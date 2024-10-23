import React, { useState } from "react";
import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link } from "react-router-dom";
import { inputLabelClass, inputFieldClass } from "../components/common/styles";
import {
  INITIAL_FORM_STATE,
  FORM_FIELDS,
} from "../utils/types/customerConstants";
import { hashPassword } from "../hashing";
import { FormFields } from "../utils/types/customerFormFields";
import { fetchData } from "../utils/fetch-data";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormFields>(INITIAL_FORM_STATE);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createUserObject = () => {
    const { confirm_password, password, ...userObject } = formData; // Exclude password and confirm_password
    userObject.password_hash = hashPassword(password); // Hash the original password
    return userObject; // Return object without password fields
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }
    setError("");

    const userObject = createUserObject();

    try {
      const result = await fetchData("register", "POST", userObject);
      console.log("User saved successfully:", result);
      // Optionally, redirect user or show success message
    } catch (error) {
      console.error("Error saving user:", error);
      setError("Failed to save user. Please try again.");
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto flex flex-col gap-y-4 mt-9"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      {FORM_FIELDS.map(({ label, type, name }) => (
        <UserInput
          key={name}
          label={label}
          type={type}
          name={name}
          labelClass={inputLabelClass}
          inputClass={inputFieldClass}
          value={formData[name as keyof FormFields]}
          onChange={handleChange}
        />
      ))}
      {error && <p className="text-red-500 text-center">{error}</p>}{" "}
      {/* Error message */}
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
