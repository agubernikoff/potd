import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";
import Account from "./Account";
import MakeAPick from "./MakeAPick";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);

  function logout() {
    setUser("");
  }

  function updateUserOnEdit(user) {
    setUser(user);
  }

  function updateUserTailsOnTail(tail) {
    setUser({ ...user, tails: [...user.tails, tail] });
  }

  function updateUserTailsOnUntail(untailID) {
    const filtered = user.tails.filter((uL) => uL.id !== untailID);
    setUser({ ...user, tails: filtered });
  }

  function updateUserFadesOnFade(fade) {
    setUser({ ...user, fades: [...user.fades, fade] });
  }

  function updateUserFadesOnUnfade(unfadeID) {
    const filtered = user.fades.filter((uL) => uL.id !== unfadeID);
    setUser({ ...user, fades: filtered });
  }

  function updatePosts(newPost) {
    setPosts([newPost, ...posts]);
  }

  function updatePostsOnGrade(graded) {
    const post = posts.find((p) => p.id === graded.id);
    const filtered = posts.filter((p) => p.id !== graded.id);
    const updated = { ...post, status: graded.status, result: graded.result };
    setPosts([...filtered, updated]);
  }

  function deletePosts(id) {
    const filtered = posts.filter((p) => p.id !== id);
    setPosts(filtered);
  }

  function loadMorePosts(posts) {
    setPosts(posts);
  }

  function updatePostOnTail(data) {
    const oldPost = posts.find((p) => p.id === data.post.id);
    const updatedTails = [...oldPost.tails, data.tail];
    const filteredPosts = posts.filter((p) => p.id !== data.post.id);
    const updatedPost = {
      ...oldPost,
      confidence: data.post.confidence,
      tails: updatedTails,
    };
    const updatedPosts = [...filteredPosts, updatedPost];
    setPosts(updatedPosts);
  }

  function updatePostUntail(untail, post) {
    const untailPost = posts.find((p) => p.id === untail.post_id);
    const filtered = untailPost.tails.filter((l) => l.id !== untail.id);
    const updatedPost = {
      ...untailPost,
      confidence: post.confidence,
      tails: filtered,
    };
    const filteredPosts = posts.filter((p) => p.id !== untailPost.id);
    const updatedPosts = [...filteredPosts, updatedPost];
    setPosts(updatedPosts);
  }

  function updatePostFade(data) {
    const fadedPost = posts.find((p) => p.id === data.fade.post_id);
    const updatedfades = [...fadedPost.fades, data.fade];
    const updatedPost = {
      ...fadedPost,
      confidence: data.post.confidence,
      fades: updatedfades,
    };
    const filteredPosts = posts.filter((p) => p.id !== data.fade.post_id);
    const updatedPosts = [...filteredPosts, updatedPost];
    setPosts(updatedPosts);
  }

  function updatePostFadesOnUnfade(unfade, post) {
    const unfadePost = posts.find((p) => p.id === unfade.post_id);
    const filtered = unfadePost.fades.filter((l) => l.id !== unfade.id);
    const updatedPost = {
      ...unfadePost,
      confidence: post.confidence,
      fades: filtered,
    };
    const filteredPosts = posts.filter((p) => p.id !== unfadePost.id);
    const updatedPosts = [...filteredPosts, updatedPost];
    setPosts(updatedPosts);
  }

  function updatePostCommentsOnComment(newComment) {
    const likedPost = posts.find((p) => p.id === newComment.post_id);
    if (likedPost) {
      const updatedComments = [...likedPost.comments, newComment];
      const updatedPost = { ...likedPost, comments: updatedComments };
      const filteredPosts = posts.filter((p) => p.id !== newComment.post_id);
      const updatedPosts = [...filteredPosts, updatedPost];
      const sorted = updatedPosts.sort((a, b) => a.id - b.id);
      setPosts(sorted);
    }
  }

  function updatePostCommentsOnDelete(deletedComment) {
    const post = posts.find((p) => p.id === deletedComment.post_id);
    if (post) {
      const filtered = post.comments.filter((l) => l.id !== deletedComment.id);
      const updatedPost = { ...post, comments: filtered };
      const filteredPosts = posts.filter((p) => p.id !== post.id);
      const updatedPosts = [...filteredPosts, updatedPost];
      const sorted = updatedPosts.sort((a, b) => a.id - b.id);
      setPosts(sorted);
    }
  }

  return (
    <div className="App">
      <Header user={user} logout={logout} />
      <div style={{ width: "100%" }}>
        <Routes>
          <Route exact path="/login" element={<Login onLogin={setUser} />} />
          <Route
            exact
            path="/"
            element={
              <Feed
                posts={posts}
                loadMorePosts={loadMorePosts}
                user={user}
                updateUserTailsOnTail={updateUserTailsOnTail}
                updateUserTailsOnUntail={updateUserTailsOnUntail}
                updateUserFadesOnFade={updateUserFadesOnFade}
                updateUserFadesOnUnfade={updateUserFadesOnUnfade}
                updatePostOnTail={updatePostOnTail}
                updatePostUntail={updatePostUntail}
                updatePostFade={updatePostFade}
                updatePostFadesOnUnfade={updatePostFadesOnUnfade}
                updatePostCommentsOnComment={updatePostCommentsOnComment}
                updatePostCommentsOnDelete={updatePostCommentsOnDelete}
                deletePosts={deletePosts}
                updatePostsOnGrade={updatePostsOnGrade}
              />
            }
          />
          <Route
            exact
            path="/games"
            element={<MakeAPick user={user} updatePosts={updatePosts} />}
          />
          <Route
            exact
            path="/u/:id"
            element={
              <Account
                user={user}
                updateUserOnEdit={updateUserOnEdit}
                updateUserTailsOnTail={updateUserTailsOnTail}
                updateUserTailsOnUntail={updateUserTailsOnUntail}
                updateUserFadesOnFade={updateUserFadesOnFade}
                updateUserFadesOnUnfade={updateUserFadesOnUnfade}
              />
            }
          />
        </Routes>
      </div>
      <Footer user={user} logout={logout} />
    </div>
  );
}

export default App;
