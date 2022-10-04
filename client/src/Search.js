import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "./SearchInput";

function Search() {
  const searchResults = useSelector((state) => state.user.searchResults);

  const [searchText, setSearchText] = useState("");

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

  return (
    <div className="feed">
      <div className="search-container">
        <SearchInput state={searchText} setter={setSearchText} />
        {mappedUsers}
      </div>
    </div>
  );
}

export default Search;
