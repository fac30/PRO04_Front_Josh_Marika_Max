import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <form className="signup-form">
      <h2>Sign Up</h2>
      <UserInput label="Username" type="text" name="username" />
      <UserInput label="Email" type="email" name="email" />
      <UserInput label="Phone Number" type="tel" name="phone_number" />
      <UserInput label="Date of Birth" type="date" name="date_of_birth" />
      <UserInput label="Street Address" type="text" name="street_address" />
      <UserInput label="Password" type="password" name="password" />
      <UserInput
        label="Confirm Password"
        type="password"
        name="confirm_password"
      />
      <SubmitButton />
      <p className="signup-text">
        Already have an account? <Link to="/UserLogin">Log In</Link>
      </p>
    </form>
  );
}
