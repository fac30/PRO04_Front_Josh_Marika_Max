import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";

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
      <SubmitButton label="Sign Up" />
      <p className="login-text">
        Already have an account? <a href="#">Login</a>
      </p>
    </form>
  );
}
