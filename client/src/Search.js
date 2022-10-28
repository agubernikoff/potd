import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NFLGames from "./NFLGames";
import MLBGames from "./MLBGames";
import NCAAFGames from "./NCAAFGames";
import NBAGames from "./NBAGames";
import Game from "./Game";
import NewPost from "./NewPost";
import SearchInput from "./SearchInput";

function Search() {
  const searchResults = useSelector((state) => state.user.searchResults);

  const [searchText, setSearchText] = useState("");

  const [pick, setPick] = useState(null);
  const [odds, setOdds] = useState(null);
  const [start, setStart] = useState(null);
  const [league, setLeague] = useState("");

  const mappedUsers = searchResults.map((u) => (
    <div className="userInfoContainer" key={u.id}>
      <NavLink to={`/u/${u.id}`}>
        <img
          src={u.profile_picture}
          alt={`${u.username}`}
          className="profilePicture"
        />
      </NavLink>
      <NavLink to={`/u/${u.id}`}>
        <strong>{u.username} </strong>
      </NavLink>
    </div>
  ));

  function setPickAndOddsAndStart(array, start, league) {
    setPick(array[0]);
    setOdds(array[1]);
    setStart(start);
    setLeague(league);
  }

  function clearSelections() {
    setPick(null);
    setOdds(null);
    setStart(null);
  }

  const upcomingGames = [
    ...NFLGames().games,
    ...MLBGames().games,
    ...NCAAFGames().games,
    ...NBAGames().games,
  ].filter((g) => new Date(g.schedule.start) > new Date(Date.now()));

  const mappedGames = searchText
    ? upcomingGames
        .filter(
          (g) =>
            g.teams.away.team
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            g.teams.home.team.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((g, i) => (
          <Game
            key={i}
            game={g}
            setPickAndOddsAndStart={setPickAndOddsAndStart}
          />
        ))
    : null;

  console.log(mappedGames);
  return (
    <div className="feed">
      <div className="search-container">
        <SearchInput state={searchText} setter={setSearchText} />
        {mappedUsers}
        {mappedGames}
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
    </div>
  );
}

export default Search;
