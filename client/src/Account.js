import React, { useEffect, useState, createRef } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Post from "./Post";

function Account({
  user,
  updateUserOnEdit,
  updateUserTailsOnTail,
  updateUserTailsOnUntail,
  updatePostOnTail,
  updatePostUntail,
  updatePostCommentsOnComment,
  updatePostCommentsOnDelete,
  updateUserFadesOnFade,
  updateUserFadesOnUnfade,
  updatePostFade,
  updatePostFadesOnUnfade,
  deletePosts,
  updatePostsOnGrade,
}) {
  const [accountHolder, setAccountHolder] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(null);
  const [changePassword, setChangePassword] = useState(false);
  const [profile_picture, setProfilePicture] = useState(null);
  const [editFormPicture, setEditFormPicture] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayOnly, setDisplayOnly] = useState(true);

  let { id } = useParams();
  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setAccountHolder(data);
        setUsername(data.username);
        setEditFormPicture(data.profile_picture);
        window.scrollTo(0, 0);
      });
  }, [id]);

  const successfulFades = accountHolder
    ? accountHolder.fades.filter((f) => f.post_result === "l").length
    : null;

  const totalFades = accountHolder
    ? accountHolder.fades.filter((f) => f.post_result).length
    : null;

  const successfulTails = accountHolder
    ? accountHolder.tails.filter((t) => t.post_result === "w").length
    : null;

  const totalTails = accountHolder
    ? accountHolder.tails.filter((t) => t.post_result).length
    : null;

  function updateAccountHolderOnTail(data) {
    const post = accountHolder.posts.find((p) => p.id === data.post.id);
    const updatedPost = {
      ...post,
      confidence: data.post.confidence,
      tails: [...post.tails, data.tail],
    };
    const filteredPosts = accountHolder.posts.filter(
      (p) => p.id !== updatedPost.id
    );
    const updatedPosts = [...filteredPosts, updatedPost];
    const sortedPosts = updatedPosts.sort((a, b) => a.id - b.id);
    setAccountHolder({ ...accountHolder, posts: sortedPosts });
  }

  function updateAccountHolderOnUnTail(untail, post) {
    const untailPost = accountHolder.posts.find((p) => p.id === untail.post_id);
    const filtered = untailPost.tails.filter((l) => l.id !== untail.id);
    const updatedPost = {
      ...untailPost,
      confidence: post.confidence,
      tails: filtered,
    };
    const filteredPosts = accountHolder.posts.filter(
      (p) => p.id !== untailPost.id
    );
    const updatedPosts = [...filteredPosts, updatedPost];
    const sortedPosts = updatedPosts.sort((a, b) => b.id - a.id);
    setAccountHolder({ ...accountHolder, posts: sortedPosts });
  }

  function updateAccountHolderOnFade(data) {
    const post = accountHolder.posts.find((p) => p.id === data.post.id);
    const updatedPost = {
      ...post,
      confidence: data.post.confidence,
      fades: [...post.fades, data.fade],
    };
    const filteredPosts = accountHolder.posts.filter(
      (p) => p.id !== updatedPost.id
    );
    const updatedPosts = [...filteredPosts, updatedPost];
    const sortedPosts = updatedPosts.sort((a, b) => a.id - b.id);
    setAccountHolder({ ...accountHolder, posts: sortedPosts });
  }

  function updateAccountHolderOnUnFade(unfade, post) {
    const unfadePost = accountHolder.posts.find((p) => p.id === unfade.post_id);
    const filtered = unfadePost.fades.filter((l) => l.id !== unfade.id);
    const updatedPost = {
      ...unfadePost,
      confidence: post.confidence,
      fades: filtered,
    };
    const filteredPosts = accountHolder.posts.filter(
      (p) => p.id !== unfadePost.id
    );
    const updatedPosts = [...filteredPosts, updatedPost];
    const sortedPosts = updatedPosts.sort((a, b) => b.id - a.id);
    setAccountHolder({ ...accountHolder, posts: sortedPosts });
  }

  function updateAccountHolderOnComment(newComment) {
    const likedPost = accountHolder.posts.find(
      (p) => p.id === newComment.post_id
    );
    if (likedPost) {
      const updatedComments = [...likedPost.comments, newComment];
      const updatedPost = { ...likedPost, comments: updatedComments };
      const filteredPosts = accountHolder.posts.filter(
        (p) => p.id !== newComment.post_id
      );
      const updatedPosts = [...filteredPosts, updatedPost];
      const sorted = updatedPosts.sort((a, b) => b.id - a.id);
      setAccountHolder({ ...accountHolder, posts: sorted });
    }
  }

  function updateAccountHolderOnDeleteComment(deletedComment) {
    const post = accountHolder.posts.find(
      (p) => p.id === deletedComment.post_id
    );
    if (post) {
      const filtered = post.comments.filter((l) => l.id !== deletedComment.id);
      const updatedPost = { ...post, comments: filtered };
      const filteredPosts = accountHolder.posts.filter((p) => p.id !== post.id);
      const updatedPosts = [...filteredPosts, updatedPost];
      const sorted = updatedPosts.sort((a, b) => a.id - b.id);
      setAccountHolder({ ...accountHolder, posts: sorted });
    }
  }

  const formData = new FormData();
  formData.append("username", username);
  if (password) formData.append("password", password);
  if (profile_picture) formData.append("profile_picture", profile_picture);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      body: formData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setAccountHolder(user);
          updateUserOnEdit(user);
          setDisplayOnly(true);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const posts = accountHolder
    ? accountHolder.posts
        .sort((a, b) => b.id - a.id)
        .map((post) => (
          // console.log({ ...post, user: accountHolder })
          <Post
            key={post.id}
            post={{ ...post, user: accountHolder }}
            user={user}
            updateUserTailsOnTail={updateUserTailsOnTail}
            updateUserTailsOnUntail={updateUserTailsOnUntail}
            updateUserFadesOnFade={updateUserFadesOnFade}
            updateUserFadesOnUnfade={updateUserFadesOnUnfade}
            updatePostUntail={updateAccountHolderOnUnTail}
            updatePostOnTail={updateAccountHolderOnTail}
            updatePostFade={updateAccountHolderOnFade}
            updatePostFadesOnUnfade={updateAccountHolderOnUnFade}
            updatePostCommentsOnComment={updateAccountHolderOnComment}
            updatePostCommentsOnDelete={updateAccountHolderOnDeleteComment}
            deletePosts={deletePosts}
            updatePostsOnGrade={updatePostsOnGrade}
            ref={createRef()}
          />
        ))
    : null;

  console.log(accountHolder);

  return (
    <div className="feed">
      {accountHolder ? null : (
        <div style={{ marginTop: "1em" }}>
          <Loading />
        </div>
      )}
      {accountHolder.id === user.id ? (
        <button
          onClick={() => setDisplayOnly(!displayOnly)}
          className="edit-acct-btn"
        >
          {displayOnly ? "EDIT PROFILE" : "CANCEL"}
        </button>
      ) : null}
      <br />
      {displayOnly ? (
        <div className="userInfoContainer">
          <img
            alt={accountHolder.username}
            src={accountHolder.profile_picture}
            className="acct_profilePicture"
          />
          <h1 className="acctUsername">{accountHolder.username}</h1>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 10,
              }}
            >
              <img
                alt={accountHolder.username}
                src={editFormPicture}
                className="acct_profilePicture"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  document.getElementById("getFile").click();
                }}
                style={{
                  width: "fit-content",
                  display: "block",
                  margin: "auto",
                }}
              >
                Edit
              </button>
            </div>
            <div className="acctInputContainer">
              <input
                id="getFile"
                type="file"
                accept="image/jpeg,image/png"
                name="profile_picture"
                style={{ display: "none" }}
                onChange={(e) => {
                  setProfilePicture(e.target.files[0]);
                  setEditFormPicture(URL.createObjectURL(e.target.files[0]));
                }}
              ></input>
              <label>USERNAME</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                placeholder={username}
                className="acctUsernameInput"
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
              />
              <label style={changePassword ? null : { visibility: "hidden" }}>
                PASSWORD
              </label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                value={password}
                className="acctUsernameInput"
                style={changePassword ? null : { visibility: "hidden" }}
                onChange={(e) => setPassword(e.target.value.toLowerCase())}
              />
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setChangePassword(!changePassword);
            }}
          >
            {changePassword ? "CANCEL CHANGE PASSWORD" : "CHANGE PASSWORD"}
          </button>
          <button type="submit">{isLoading ? <Loading /> : "SUBMIT"}</button>
          {errors.map((err) => (
            <h3 key={err} className="errors">
              {err}
            </h3>
          ))}
        </form>
      )}
      {accountHolder ? (
        <>
          <p className={displayOnly ? "recordP" : null}>
            <strong>RECORD: </strong>
            {`${accountHolder.w} - ${accountHolder.l}`} (
            {Math.round((accountHolder.winP + Number.EPSILON) * 100)}%)
          </p>
          <p className={displayOnly ? "backP" : null}>
            <strong>TAIL/FADE SUCCESS: </strong>
            {`${successfulFades + successfulTails} - ${
              totalTails + totalFades - (successfulFades + successfulTails)
            }`}{" "}
            ({Math.round((accountHolder.backP + Number.EPSILON) * 100)}%)
          </p>
          {posts}
        </>
      ) : null}
    </div>
  );
}

export default Account;
