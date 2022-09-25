import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";
import Leaderboard from "./Leaderboard";

function Footer() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width:1200px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    if (window.matchMedia("(max-width:1200px)").matches) setMatches(true);
  }, []);
  console.log(matches);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => dispatch(userActions.logOut()));
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
          className="log"
        >
          LOG OUT
        </NavLink>
      ) : (
        <NavLink to={`/login`} style={activeStyle} className="log">
          LOG IN
        </NavLink>
      )}
      {matches ? null : <Leaderboard inFooter={true} />}
    </div>
  );
}

export default Footer;
