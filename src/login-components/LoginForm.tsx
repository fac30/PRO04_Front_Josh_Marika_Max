import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";

export default function LoginForm() {
  return (
    <form className="login-form">
      <h2>Login</h2>
      <UserInput label="Username" type="text" name="username" />
      <UserInput label="Password" type="password" name="password" />
      <SubmitButton />
      <p className="signup-text">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </form>
  );
}
