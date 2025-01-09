import React, { useState } from "react";
import UserInput from "./UserInput";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact Us form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className=" m-auto bg-background-default shadow-glow p-4 max-w-md w-full rounded-lg">
      <h2 className="text-xl text-black font-bold mb-4 text-center">
        Contact Us
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <UserInput
          id="name"
          label="Name"
          type="text"
          name="name"
          labelClass="block text-gray-700 mb-2"
          inputClass="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-background-light w-full"
          value={formData.name}
          onChange={handleChange}
        />
        <UserInput
          id="email"
          label="Email Address"
          type="email"
          name="email"
          labelClass="block text-gray-700 mb-2"
          inputClass="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-background-light w-full"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-background-light w-full"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button className="bg-background-light text-black py-2 rounded-lg hover:bg-background-footer transition">
          Send Message
        </button>
      </form>
      <p className="text-sm text-gray-500 text-center mt-2">
        We’ll get back to you as soon as possible.
      </p>
    </div>
  );
}
