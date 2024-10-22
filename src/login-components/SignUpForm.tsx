import React, { useState } from "react";
import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link } from "react-router-dom";
import { inputLabelClass, inputFieldClass } from "../components/common/styles";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    street_address: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation (e.g., password confirmation)
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    // Save data to local storage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    existingUsers.push({
      username: formData.username,
      email: formData.email,
      phone_number: formData.phone_number,
      date_of_birth: formData.date_of_birth,
      street_address: formData.street_address,
      password: formData.password,
    });

    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Sign up successful!");
    setFormData({
      username: "",
      email: "",
      phone_number: "",
      date_of_birth: "",
      street_address: "",
      password: "",
      confirm_password: "",
    });
  };

  return (
    <form
      className="w-full max-w-sm mx-auto flex flex-col gap-y-4 mt-9"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

      <UserInput
        label="Username"
        type="text"
        name="username"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
        value={formData.username}
        onChange={handleChange}
      />
      <UserInput
        label="Email"
        type="email"
        name="email"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
        value={formData.email}
        onChange={handleChange}
      />
      <UserInput
        label="Phone Number"
        type="tel"
        name="phone_number"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
        value={formData.phone_number}
        onChange={handleChange}
      />
      <UserInput
        label="Date of Birth"
        type="date"
        name="date_of_birth"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
        value={formData.date_of_birth}
        onChange={handleChange}
      />
      <UserInput
        label="Street Address"
        type="text"
        name="street_address"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
        value={formData.street_address}
        onChange={handleChange}
      />
      <UserInput
        label="Password"
        type="password"
        name="password"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
        value={formData.password}
        onChange={handleChange}
      />
      <UserInput
        label="Confirm Password"
        type="password"
        name="confirm_password"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
        value={formData.confirm_password}
        onChange={handleChange}
      />

      <SubmitButton />

      <p className="text-center text-gray-600 mt-4 mb-12">
        Already have an account?{" "}
        <Link to="/UserLogin" className="text-blue-500 hover:underline">
          Log In
        </Link>
      </p>
    </form>
  );
}
