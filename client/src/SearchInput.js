import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";

function SearchInput({ state, setter }) {
  const dispatch = useDispatch();

  //as the local state of this input field changes it is sent to the redux store where it will be used to filter the posts state to find a matching post
  useEffect(() => {
    dispatch(userActions.setSearchResults(state));
  }, [dispatch, state]);
  return (
    <input
      type="search"
      list="options"
      // size="73"
      value={state}
      placeholder="Search..."
      onChange={(e) => setter(e.target.value)}
    ></input>
  );
}

export default SearchInput;
