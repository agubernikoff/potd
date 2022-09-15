import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

function Leaderboard() {
  const [usersByWinP, setUsersByWinP] = useState([]);
  const [usersByBackP, setUsersByBackP] = useState([]);
  const [usersByAggS, setUsersByAggS] = useState([]);
  const [sortBy, setSortBy] = useState("WIN PERCENTAGE");

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

  console.log(usersByWinP, usersByBackP, usersByAggS);

  const mappedWinP = usersByWinP.map((u) => (
    <li key={u.id}>
      <div className="listItem">
        <NavLink to={`/u/${u.id}`}>
          <div className="userInfoContainer">
            <img alt={u.username} src={u.profile_picture} />
            <p>{u.username}</p>
          </div>
        </NavLink>
        <p>
          {u.w} - {u.l}
        </p>
        <p>({Math.round((u.winP + Number.EPSILON) * 100)}%)</p>
      </div>
    </li>
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
      <li key={u.id}>
        <div className="listItem">
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
          <p>
            {successfulFades + successfulTails} -{" "}
            {totalTails + totalFades - (successfulFades + successfulTails)}
          </p>
          <p>({Math.round((u.backP + Number.EPSILON) * 100)}%)</p>
        </div>
      </li>
    );
  });
  return (
    <div className="feed">
      <h1 style={{ textAlign: "center" }}>LEADERBOARD</h1>
      <select
        className="leaderboardSelect"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option>WIN PERCENTAGE</option>
        <option>FADE/TAIL SUCCESS</option>
        <option>AGGREGATE SUCCESS</option>
      </select>
      <div className="leadersHeaders">
        <div className="listItem">
          <h3>USERS</h3>
          <h3>RECORD</h3>
          <h3>{sortBy}</h3>
        </div>
      </div>
      {usersByWinP[0] ? (
        <ol className="leaderboard">
          {sortBy === "WIN PERCENTAGE" ? mappedWinP : null}
          {sortBy === "FADE/TAIL SUCCESS" ? mappedBackP : null}
        </ol>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Leaderboard;
