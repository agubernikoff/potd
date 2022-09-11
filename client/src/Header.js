import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import home from "./assets/home.png";

function Header({ user, logout }) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width:860px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  });

  const activeStyle = ({ isActive }) =>
    isActive
      ? {
          textDecoration: "underline",
        }
      : null;

  return (
    <div className="header">
      <h1 className="lock">🔒</h1>
      <h3 className="title">PICK OF THE DAY</h3>
      {user ? (
        <>
          {/* <NavLink to={`/u/${user.id}`} style={activeStyle}> */}
          <img
            alt="propic"
            src={user.profile_picture}
            className="profilePicture"
          />
          {/* <h3 style={{ display: "inline-block" }}>
              {user.username.toUpperCase()}
            </h3> */}
          {/* </NavLink> */}
          <br />
          <br />
        </>
      ) : null}
      <NavLink to={"/"} style={activeStyle}>
        {matches ? (
          <img alt="home-icon" src={home} className="home-icon" />
        ) : (
          "HOME"
        )}
      </NavLink>
      <br />
      <br />
      <NavLink to={"/games"} style={activeStyle} className="makeapick">
        MAKE A PICK
      </NavLink>
    </div>
  );
}

export default Header;
