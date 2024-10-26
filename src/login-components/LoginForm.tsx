import { useState } from "react";
import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { inputLabelClass, inputFieldClass } from "../components/common/styles";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use state values instead of accessing them from the event
    if (username === "existingUser" && password === "validPassword") {
      console.log("Navigating to UserPage");
      setLoginError(false);
      navigate("/UserPage");
    } else {
      console.log("Login failed");
      setLoginError(true);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
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
        value={username} // Controlled input
        onChange={handleInputChange} // Pass the change handler
        labelClass={inputLabelClass}
        inputClass={inputFieldClass}
      />
      <UserInput
        label="Password"
        type="password"
        name="password"
        value={password} // Controlled input
        onChange={handleInputChange} // Pass the change handler
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
