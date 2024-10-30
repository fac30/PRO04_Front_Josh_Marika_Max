import { useState } from "react";
import UserInput from "../components/common/UserInput";
import SubmitButton from "../components/common/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { inputLabelClass, inputFieldClass } from "../components/common/styles";
import { fetchData } from "../utils/fetch-data";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginMessage, setLoginMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginDetails = {
      username,
      password,
    };

    try {
      const response = await fetchData("login", "POST", loginDetails);

      if (response.message === "Login successful") {
        setLoginMessage("Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setLoginMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setLoginMessage("Login error. Please try again.");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mt-24 mb-6">Login</h2>
      {loginMessage && (
        <p className="text-center text-green-500 mb-4">{loginMessage}</p>
      )}
      <form
        className="w-full max-w-sm mx-auto flex flex-col gap-y-4 mt-9"
        onSubmit={handleLogin}
      >
        <UserInput
          id="username"
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          labelClass={inputLabelClass}
          inputClass={inputFieldClass}
        />
        <UserInput
          id="password"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          labelClass={inputLabelClass}
          inputClass={inputFieldClass}
        />
        <SubmitButton buttonText="Sign In" />
        <p className="text-center text-gray-600 mt-4 mb-60">
          Don't have an account?{" "}
          <Link to="/UserSignUp" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
}
