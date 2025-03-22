import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoldPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || user?.tier !== "Gold") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <h1>Welcome to the Gold Page</h1>
      <p>You have Gold-level access.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default GoldPage;
