import React from "react";

function Game({ game, setPickAndOddsAndStart }) {
  return (
    <div className="game">
      <div className="teams">
        <p className="team">{game.teams.away.team}</p>
        <p>@</p>
        <p className="team">{game.teams.home.team}</p>
      </div>
      <div className="gameTime">
        <p>
          {new Date(game.schedule.start).toLocaleString("en-US", {
            weekday: "long",
            year: "2-digit",
            month: "numeric",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
      </div>
      <div className="lines-container">
        <div className="lines">
          <p className="line-header">SPREAD</p>
          <button
            className="line-btn"
            value={
              game.teams.away.team +
              " " +
              game.odds.spread.current.away +
              "," +
              game.odds.spread.current.awayOdds
            }
            onClick={(e) =>
              setPickAndOddsAndStart(
                e.target.value.split(","),
                game.schedule.start
              )
            }
          >
            {game.odds.spread.current.away} ({game.odds.spread.current.awayOdds}
            )
          </button>
          <button
            className="line-btn"
            value={
              game.teams.home.team +
              " " +
              game.odds.spread.current.home +
              "," +
              game.odds.spread.current.homeOdds
            }
            onClick={(e) =>
              setPickAndOddsAndStart(
                e.target.value.split(","),
                game.schedule.start
              )
            }
          >
            {game.odds.spread.current.home} ({game.odds.spread.current.homeOdds}
            )
          </button>
        </div>
        <div className="lines">
          <p className="line-header">MONEYLINE</p>
          <button
            className="line-btn"
            value={
              game.teams.away.team +
              " " +
              "ML" +
              "," +
              game.moneyline.current.awayOdds
            }
            onClick={(e) =>
              setPickAndOddsAndStart(
                e.target.value.split(","),
                game.schedule.start
              )
            }
          >
            {game.moneyline.current.awayOdds}
          </button>
          <button
            className="line-btn"
            value={
              game.teams.home.team +
              " " +
              "ML" +
              "," +
              game.moneyline.current.homeOdds
            }
            onClick={(e) =>
              setPickAndOddsAndStart(
                e.target.value.split(","),
                game.schedule.start
              )
            }
          >
            {game.moneyline.current.homeOdds}
          </button>
        </div>
        <div className="lines">
          <p className="line-header">TOTAL</p>
          <button
            className="line-btn"
            value={
              game.teams.away.abbreviation +
              "/" +
              game.teams.home.abbreviation +
              " " +
              "O" +
              game.total.current.total +
              "," +
              game.total.current.overOdds
            }
            onClick={(e) =>
              setPickAndOddsAndStart(
                e.target.value.split(","),
                game.schedule.start
              )
            }
          >
            O{game.total.current.total} ({game.total.current.overOdds})
          </button>
          <button
            className="line-btn"
            value={
              game.teams.away.abbreviation +
              "/" +
              game.teams.home.abbreviation +
              " " +
              "U" +
              game.total.current.total +
              "," +
              game.total.current.underOdds
            }
            onClick={(e) =>
              setPickAndOddsAndStart(
                e.target.value.split(","),
                game.schedule.start
              )
            }
          >
            U{game.total.current.total} ({game.total.current.underOdds})
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
