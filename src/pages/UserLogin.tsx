import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../login-components/LoginForm";
import { fetchData } from "../utils/fetch-data";

export default function UserLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await fetchData("check-session", "GET");
        if (data.isLoggedIn) {
          navigate("/UserPage");
        }
      } catch (error) {
        console.error("Error checking session:", error);
      }
    };

    checkSession();
  }, [navigate]);

  return (
    <div id="UserLogin">
      <LoginForm />
    </div>
  );
}
