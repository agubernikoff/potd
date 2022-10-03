import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

function Leaderboard({ inFooter }) {
  const [usersByWinP, setUsersByWinP] = useState([]);
  const [usersByBackP, setUsersByBackP] = useState([]);
  const [usersByAggS, setUsersByAggS] = useState([]);
  const [sortBy, setSortBy] = useState(inFooter ? "WIN %" : "WIN PERCENTAGE");

  useEffect(() => {
    fetch("/leadersW")
      .then((r) => r.json())
      .then((data) => setUsersByWinP(data));
    fetch("/leadersB")
      .then((r) => r.json())
      .then((data) => setUsersByBackP(data));
    fetch("/leadersA")
      .then((r) => r.json())
      .then((data) => setUsersByAggS(data));
  }, []);

  const mappedWinP = usersByWinP.map((u) => (
    <tr key={u.id}>
      <td>.</td>
      <td className="listItem">
        <NavLink to={`/u/${u.id}`}>
          <div className="userInfoContainer">
            <img
              alt={u.username}
              src={u.profile_picture}
              className="profilePicture"
              style={inFooter ? { fontSize: "4em" } : null}
            />
            <p>{u.username}</p>
          </div>
        </NavLink>
      </td>
      <td>
        {u.w} - {u.l}
      </td>
      <td>{Math.round((u.winP + Number.EPSILON) * 100)}%</td>
    </tr>
  ));

  const mappedBackP = usersByBackP.map((u) => {
    const successfulFades = u
      ? u.fades.filter((f) => f.post_result === "l").length
      : null;

    const totalFades = u ? u.fades.filter((f) => f.post_result).length : null;

    const successfulTails = u
      ? u.tails.filter((t) => t.post_result === "w").length
      : null;

    const totalTails = u ? u.tails.filter((t) => t.post_result).length : null;

    return (
      <tr key={u.id}>
        <td>.</td>
        <td className="listItem">
          <NavLink to={`/u/${u.id}`}>
            <div className="userInfoContainer">
              <img
                alt={u.username}
                src={u.profile_picture}
                className="profilePicture"
              />
              <p>{u.username}</p>
            </div>
          </NavLink>
        </td>
        <td>
          {successfulFades + successfulTails} -{" "}
          {totalTails + totalFades - (successfulFades + successfulTails)}
        </td>
        <td>{Math.round((u.backP + Number.EPSILON) * 100)}%</td>
      </tr>
    );
  });

  return (
    <div
      className={inFooter ? null : "feed"}
      style={
        inFooter ? { width: "100%", fontSize: ".1em", marginTop: "36%" } : null
      }
    >
      {inFooter ? null : (
        <>
          <h1 style={{ textAlign: "center" }}>LEADERBOARD</h1>
          <div className="leaderboardSelect">
            <select onChange={(e) => setSortBy(e.target.value)}>
              <option>WIN PERCENTAGE</option>
              <option>FADE/TAIL SUCCESS</option>
              {/* <option>AGGREGATE SUCCESS</option> */}
            </select>
          </div>
        </>
      )}
      {usersByWinP[0] ? (
        <table>
          <thead>
            <tr>
              <th style={{ width: "1%" }}></th>
              <th>USERS</th>
              <th>RECORD</th>
              <th style={{ width: "30%" }}>{sortBy}</th>
            </tr>
          </thead>
          <tbody>
            {inFooter && sortBy === "WIN %" ? mappedWinP : null}
            {sortBy === "WIN PERCENTAGE" ? mappedWinP : null}
            {sortBy === "FADE/TAIL SUCCESS" ? mappedBackP : null}
          </tbody>
        </table>
      ) : (
        <>
          <br />
          <br />
          <Loading />
        </>
      )}
    </div>
  );
}

export default Leaderboard;
