import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NFLGames from "./NFLGames";
import MLBGames from "./MLBGames";
import NCAAFGames from "./NCAAFGames";
import NBAGames from "./NBAGames";
import Game from "./Game";
import NewPost from "./NewPost";

function MakeAPick() {
  const [pick, setPick] = useState(null);
  const [odds, setOdds] = useState(null);
  const [start, setStart] = useState(null);
  const [league, setLeague] = useState("NFL");

  const leagueURLParam = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (leagueURLParam.league) setLeague(leagueURLParam.league);
  }, [leagueURLParam]);

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

  const upcomingNCAAF = NCAAFGames().games.filter(
    (g) => new Date(g.schedule.start) > new Date(Date.now())
  );

  const upcomingNBA = NBAGames().games.filter(
    (g) => new Date(g.schedule.start) > new Date(Date.now())
  );

  const NFLgames = upcomingNFL.map((g, i) => (
    <Game key={i} game={g} setPickAndOddsAndStart={setPickAndOddsAndStart} />
  ));

  const MLBgames = upcomingMLB.map((g, i) => (
    <Game key={i} game={g} setPickAndOddsAndStart={setPickAndOddsAndStart} />
  ));

  const NCAAFgames = upcomingNCAAF.map((g, i) => (
    <Game key={i} game={g} setPickAndOddsAndStart={setPickAndOddsAndStart} />
  ));

  const NBAgames = upcomingNBA.map((g, i) => (
    <Game key={i} game={g} setPickAndOddsAndStart={setPickAndOddsAndStart} />
  ));

  return (
    <div className="feed">
      <h3 style={{ textAlign: "center" }}>
        Don't see your pick? <br />
        Email me at{" "}
        <a href="mailto:agubernikoff@gmail.com">agubernikoff@gmail.com</a> with
        your pick and your caption for the post.
      </h3>
      <h3 style={{ textAlign: "center" }}>LINES</h3>
      <div className="leaderboardSelect">
        <select
          onChange={(e) => {
            nav(`/games/${e.target.value}`);
          }}
          value={league}
        >
          <option>NFL</option>
          <option>NCAAF</option>
          <option>NBA</option>
          <option>MLB</option>
        </select>
      </div>
      {pick && odds && start ? (
        <NewPost
          pick={pick}
          odds={odds}
          start={start}
          clearSelections={clearSelections}
          league={league}
        />
      ) : null}
      {league === "NFL" ? NFLgames : null}
      {league === "NCAAF" ? NCAAFgames : null}
      {league === "NBA" ? NBAgames : null}
      {league === "MLB" ? MLBgames : null}
    </div>
  );
}

export default MakeAPick;
