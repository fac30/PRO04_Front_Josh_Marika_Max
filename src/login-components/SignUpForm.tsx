import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link } from "react-router-dom";
import { inputLabelClass, inputFieldClass } from "../components/common/styles";

export default function SignUpForm() {
  return (
    <form className="w-full max-w-sm mx-auto flex flex-col gap-y-4 mt-9">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

      <UserInput
        label="Username"
        type="text"
        name="username"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
      />
      <UserInput
        label="Email"
        type="email"
        name="email"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
      />
      <UserInput
        label="Phone Number"
        type="tel"
        name="phone_number"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
      />
      <UserInput
        label="Date of Birth"
        type="date"
        name="date_of_birth"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
      />
      <UserInput
        label="Street Address"
        type="text"
        name="street_address"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
      />
      <UserInput
        label="Password"
        type="password"
        name="password"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
      />
      <UserInput
        label="Confirm Password"
        type="password"
        name="confirm_password"
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
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
