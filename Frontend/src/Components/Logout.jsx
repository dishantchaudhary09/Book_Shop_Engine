import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Authprovider";
import toast from "react-hot-toast";
function Logout() {
  const navigate = useNavigate();
  const [, setAuthUser] = useAuth();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setAuthUser(null);
      navigate("/");
      toast.success("Logged Out");
  };

  return (
    <button onClick={handleLogOut} className="btn whitespace-nowrap bg-red-700 text-white px-4 py-2 rounded ml-8">
      Log Out
    </button>
  );
}

export default Logout;
