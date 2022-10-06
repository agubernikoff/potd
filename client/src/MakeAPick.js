import React, { useState } from "react";
import NFLGames from "./NFLGames";
import MLBGames from "./MLBGames";
import Game from "./Game";
import NewPost from "./NewPost";

function MakeAPick() {
  const [pick, setPick] = useState(null);
  const [odds, setOdds] = useState(null);
  const [start, setStart] = useState(null);
  const [league, setLeague] = useState("NFL");

  function setPickAndOddsAndStart(array, start) {
    setPick(array[0]);
    setOdds(array[1]);
    setStart(start);
  }

  function clearSelections() {
    setPick(null);
    setOdds(null);
    setStart(null);
  }

  const upcomingNFL = NFLGames().games.filter(
    (g) => new Date(g.schedule.start) > new Date(Date.now())
  );

  const upcomingMLB = MLBGames().games.filter(
    (g) => new Date(g.schedule.start) > new Date(Date.now())
  );

  const NFLgames = upcomingNFL.map((g, i) => (
    <Game key={i} game={g} setPickAndOddsAndStart={setPickAndOddsAndStart} />
  ));

  const MLBgames = upcomingMLB.map((g, i) => (
    <Game key={i} game={g} setPickAndOddsAndStart={setPickAndOddsAndStart} />
  ));

  return (
    <div className="feed">
      <h3 style={{ textAlign: "center" }}>LINES</h3>
      <div className="leaderboardSelect">
        <select onChange={(e) => setLeague(e.target.value)}>
          <option>NFL</option>
          <option>MLB</option>
          {/* <option>NCAAF</option> */}
        </select>
      </div>
      {pick && odds && start ? (
        <NewPost
          pick={pick}
          odds={odds}
          start={start}
          clearSelections={clearSelections}
        />
      ) : null}
      {league === "NFL" ? NFLgames : null}
      {league === "MLB" ? MLBgames : null}
    </div>
  );
}

export default MakeAPick;
