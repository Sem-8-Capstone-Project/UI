import "./styles.css";
import { useEffect, useState } from "react";

const Topabar = () => {
  const [userName, setUserName] = useState("");

  const getUserName = async () => {
    try {
      let response = await fetch("http://localhost:5000/user-info", {
        method: "GET",
        credentials: "include",
      });
      response = await response.json();
      setUserName(response.user);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogout = async () => {
    window.open('http://localhost:5000/logout', "_self");
  };

  useEffect(() => {
    getUserName();
  }, [userName]);
  return (
    <>
      <div className="topbar">
      <div className="user-info">
        <span>Hi, {userName}</span>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
    </>
  );
};

export default Topabar;
