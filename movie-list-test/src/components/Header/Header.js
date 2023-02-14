import React from "react";
import "./Header.css";
import LoginButton from "../../Pages/Login/LoginButton";
import LogoutButton from "../../Pages/Login/LogoutButton";
//import LogoutButton from "../../Pages/Login/LogoutButton";

const Header = () => {
  return (
    <>
      <span className="header">⭐ Movie Stars ⭐ </span>
      <span className="loginButton">
        <LogoutButton/>
        <LoginButton />
      </span>
    </>
  );
};

export default Header;
