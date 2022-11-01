import React, { useEffect, useState } from "react";

function Game({ game, setPickAndOddsAndStart }) {
  const [homeLogo, setHomeLogo] = useState(null);
  const [awayLogo, setAwayLogo] = useState(null);

  console.log(game.teams.away.team.split(" ").join(""));
  useEffect(() => {
    fetch(
      `${process.env.PUBLIC_URL}/logos/${game.teams.away.team
        .split(" ")
        .join("")}.png`
    ).then((r) => {
      if (r.ok) setAwayLogo(r.url);
    });
    fetch(
      `${process.env.PUBLIC_URL}/logos/${game.teams.home.team
        .split(" ")
        .join("")}.png`
    ).then((r) => {
      if (r.ok) setHomeLogo(r.url);
    });
  }, [game.teams.away.team, game.teams.home.team]);
  return (
    <div className="game">
      <div className="teams">
        <div className="team">
          <p className="team-name">
            {game.teams.away.ranking
              ? "#" + game.teams.away.ranking + " "
              : null}
            {game.teams.away.team}
          </p>
          {game.teams.away.starter ? (
            <span className="team-starter">{game.teams.away.starter}</span>
          ) : null}
          <img
            alt={game.teams.away.team}
            src={awayLogo}
            style={{ width: "25%", display: "block" }}
          />
        </div>
        <p>@</p>
        <div className="team">
          <img
            alt={game.teams.home.team}
            src={homeLogo}
            style={{ width: "25%", display: "block" }}
          />
          <p className="team-name">
            {game.teams.home.ranking
              ? "#" + game.teams.home.ranking + " "
              : null}
            {game.teams.home.team}
          </p>
          {game.teams.home.starter ? (
            <span className="team-starter">{game.teams.home.starter}</span>
          ) : null}
        </div>
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
                game.schedule.start,
                game.details.league
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
                game.schedule.start,
                game.details.league
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
                game.schedule.start,
                game.details.league
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
                game.schedule.start,
                game.details.league
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
                game.schedule.start,
                game.details.league
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
                game.schedule.start,
                game.details.league
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
