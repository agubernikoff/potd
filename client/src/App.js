import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";
import Account from "./Account";
import MakeAPick from "./MakeAPick";
import Leaderboard from "./Leaderboard";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";
import { postsActions } from "./store/posts-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(userActions.setUser(user));
        });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => dispatch(postsActions.setPosts(data)));
    fetch("/users")
      .then((r) => r.json())
      .then((data) => dispatch(userActions.setUsers(data)));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div style={{ width: "100%" }}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Feed />} />
          <Route path="/games" element={<MakeAPick />} />
          <Route path="/games/:league" element={<MakeAPick />} />
          <Route exact path="/u/:id" element={<Account />} />
          <Route
            exact
            path="/leaderboard"
            element={<Leaderboard inFooter={false} />}
          />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
