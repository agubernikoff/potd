import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import home from "./assets/home.png";
import pick from "./assets/pick.png";
import leaderboard from "./assets/leaderboard.png";

function Header({ user, logout }) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width:860px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    if (window.matchMedia("(max-width:860px)").matches) setMatches(true);
  }, []);

  const activeStyle = ({ isActive }) =>
    isActive
      ? {
          textDecoration: "underline",
        }
      : null;

  return (
    <div className="header">
      <h1 className="lock">🔒</h1>
      {/* <h3 className="title">PICK OF THE DAY</h3> */}
      {user ? (
        <>
          <NavLink
            to={`/u/${user.id}`}
            style={activeStyle}
            className="home-icon-A"
          >
            {matches ? (
              <img
                alt="propic"
                src={user.profile_picture}
                className="home-icon profilePicture"
              />
            ) : (
              <div className="header_links">
                <img
                  alt="propic"
                  src={user.profile_picture}
                  className="nav_icon round"
                />
                {user.username.toUpperCase()}
              </div>
            )}
          </NavLink>
          <br />
          <br />
        </>
      ) : null}
      <NavLink to={"/"} style={activeStyle} className="home-icon-A">
        {matches ? (
          <img alt="home-icon" src={home} className="home-icon" />
        ) : (
          <div className="header_links">
            <img alt="home-icon" src={home} className="nav_icon" />
            HOME
          </div>
        )}
      </NavLink>
      <br />
      <br />
      <NavLink to={"/games"} style={activeStyle} className="makeapick">
        {matches ? (
          <img alt="home-icon" src={pick} className="home-icon" />
        ) : (
          <div className="header_links">
            <img alt="home-icon" src={pick} className="nav_icon" />
            MAKE A PICK
          </div>
        )}
      </NavLink>
      {/* <br />
      <br />
      <NavLink to={"/leaderboard"} style={activeStyle} className="makeapick">
        {matches ? (
          <img alt="home-icon" src={leaderboard} className="home-icon" />
        ) : (
          <div className="header_links">
            <img alt="home-icon" src={leaderboard} className="nav_icon" />
            LEADERBOARD
          </div>
        )}
      </NavLink> */}
    </div>
  );
}

export default Header;
