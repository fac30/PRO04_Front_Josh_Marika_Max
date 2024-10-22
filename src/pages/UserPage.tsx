import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, e.g., clearing tokens, session, etc.
    
    // Redirect to the login page
    navigate("/UserLogin");
  };

    return (
      <div>
        <h1>User Page</h1>
        <button data-test="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
  export default UserPage;
