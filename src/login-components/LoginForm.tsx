import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form className="w-full max-w-sm mx-auto flex flex-col gap-y-4 mt-9">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      <UserInput
        label="Username"
        type="text"
        name="username"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Tailwind classes for input
      />

      <UserInput
        label="Password"
        type="password"
        name="password"
        labelClass="block font-bold text-gray-700 mb-2"
        inputClass="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <SubmitButton />

      <p className="text-center text-gray-600 mt-4 mb-60">
        Don't have an account?{" "}
        <Link to="/UserSignUp" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
