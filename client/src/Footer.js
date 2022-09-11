import React from "react";
import { NavLink } from "react-router-dom";

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
    </div>
  );
}

export default Footer;
