import React, { useState } from "react";
import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link } from "react-router-dom";
import { inputLabelClass, inputFieldClass } from "../components/common/styles";
import {
  INITIAL_FORM_STATE,
  FORM_FIELDS,
} from "../utils/types/customerConstants";
import { hashPassword } from "../hashing"; // Import the hashPassword function
import { FormFields } from "../utils/types/CustomerFormFields"; // Ensure this interface exists and defines your form fields

const SignUpForm = () => {
  const [formData, setFormData] = useState<FormFields>(INITIAL_FORM_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    // Hash the password using the imported hashPassword function
    const hashedPassword = hashPassword(formData.password);

    try {
      // Store user data directly in localStorage without confirm_password
      const users: Omit<FormFields, "confirm_password">[] = JSON.parse(
        localStorage.getItem("users") || "[]",
      );
      const userWithoutConfirmPassword: Omit<FormFields, "confirm_password"> = {
        ...formData,
        password: hashedPassword, // Store hashed password
      };

      users.push(userWithoutConfirmPassword);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Sign up successful!");
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
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
          value={formData[name as keyof FormFields]} // Use key indexing to access values
          onChange={handleChange}
        />
      ))}

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
