import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Topabar = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const getUserName = async () => {
    try {
      let response = await fetch("http://localhost:5000/user-info", {
        method: "GET",
        credentials: "include",
      });
      if(response.status === 200 || response.status === '200'){
        response = await response.json();
        setUserName(response.user.name);
        console.log(response);
      }else{
          navigate('/');
      }
      
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogout = async () => {
    window.open('http://localhost:5000/logout', "_self");
  };

  useEffect(() => {
    getUserName();
  });
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
