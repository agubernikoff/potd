import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";
import Account from "./Account";
import MakeAPick from "./MakeAPick";
import Leaderboard from "./Leaderboard";
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
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <div style={{ width: "100%" }}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/games" element={<MakeAPick />} />
          <Route exact path="/u/:id" element={<Account />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
