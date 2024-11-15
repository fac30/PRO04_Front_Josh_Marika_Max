import { fetchData } from "../utils/fetch-data";

const UserPage = () => {
  const handleLogout = async () => {
    try {
      await fetchData("check-session", "DELETE");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div id="UserPage">
      <h2>Hello User</h2>
      <button data-test="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserPage;
