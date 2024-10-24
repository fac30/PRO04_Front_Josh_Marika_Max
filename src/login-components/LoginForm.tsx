import { useState } from "react";
import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { inputLabelClass, inputFieldClass } from "../components/common/styles";

export default function LoginForm() {
  const [loginError, setLoginError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = <T extends React.FormEvent<HTMLFormElement>>(e: T) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    if (username === "existingUser" && password === "validPassword") {
      console.log("Navigating to UserPage");
      setLoginError(false);
      navigate("/UserPage");
    } else {
      console.log("Login failed");
      setLoginError(true);
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto flex flex-col gap-y-4 mt-9"
      onSubmit={handleLogin}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      <UserInput
        label="Username"
        type="text"
        name="username"
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

      {loginError && (
        <span className="error-message">Email or password is incorrect</span>
      )}
      <SubmitButton buttonText="Sign In" />

      <p className="text-center text-gray-600 mt-4 mb-60">
        Don't have an account?{" "}
        <Link to="/UserSignUp" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
