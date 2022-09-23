import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";
// import Leaderboard from "./Leaderboard";

function Footer() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

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
