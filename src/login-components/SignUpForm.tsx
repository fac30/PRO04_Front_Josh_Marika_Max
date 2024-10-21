import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <form className="w-full max-w-sm mx-auto flex flex-col gap-y-4 mt-9">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

      <UserInput
        label="Username"
        type="text"
        name="username"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <UserInput
        label="Email"
        type="email"
        name="email"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <UserInput
        label="Phone Number"
        type="tel"
        name="phone_number"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <UserInput
        label="Date of Birth"
        type="date"
        name="date_of_birth"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <UserInput
        label="Street Address"
        type="text"
        name="street_address"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <UserInput
        label="Password"
        type="password"
        name="password"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <UserInput
        label="Confirm Password"
        type="password"
        name="confirm_password"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <SubmitButton />

      <p className="text-center text-gray-600 mt-4 mb-9">
        Already have an account?{" "}
        <Link to="/UserLogin" className="text-blue-500 hover:underline">
          Log In
        </Link>
      </p>
    </form>
  );
}
