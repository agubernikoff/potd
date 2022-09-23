import React, { useState } from "react";
import NFLGames from "./NFLGames";
import Game from "./Game";
import NewPost from "./NewPost";

function MakeAPick() {
  const [pick, setPick] = useState(null);
  const [odds, setOdds] = useState(null);
  const [start, setStart] = useState(null);

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

  const upcoming = NFLGames().games.filter(
    (g) => new Date(g.schedule.start) > new Date(Date.now())
  );

  const games = upcoming.map((g, i) => (
    <Game key={i} game={g} setPickAndOddsAndStart={setPickAndOddsAndStart} />
  ));

  return (
    <div className="feed">
      <h3 style={{ textAlign: "center" }}>LINES</h3>
      {pick && odds && start ? (
        <NewPost
          pick={pick}
          odds={odds}
          start={start}
          clearSelections={clearSelections}
        />
      ) : null}
      {games}
    </div>
  );
}

export default MakeAPick;
