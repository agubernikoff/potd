import React from "react";
import { NavLink } from "react-router-dom";
// import Leaderboard from "./Leaderboard";

function Footer({ user, logout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => logout());
  }

  const activeStyle = ({ isActive }) =>
    isActive
      ? {
          textDecoration: "underline",
        }
      : null;

  return (
    <div className="footer">
      {user ? (
        <NavLink
          to={"/"}
          onClick={() => {
            handleLogout();
          }}
        >
          LOGOUT
        </NavLink>
      ) : (
        <NavLink to={`/login`} style={activeStyle}>
          <h3>LOGIN</h3>
        </NavLink>
      )}
      {/* <Leaderboard /> */}
    </div>
  );
}

export default Footer;
