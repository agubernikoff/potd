import React, { useState, useRef, forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";
import { ahActions } from "./store/ah-slice";
import { postsActions } from "./store/posts-slice";
import heartIcon from "./assets/heartIcon.png";
import emptyHeartIcon from "./assets/emptyHeartIcon.png";
import thumbsUp from "./assets/thumbsUp.png";
import thumbsUpGrey from "./assets/thumbsUpGrey.png";
import thumbsDown from "./assets/thumbsDown.png";
import thumbsDownGrey from "./assets/thumbsDownGrey.png";

import Carousel from "react-elastic-carousel";

const Post = forwardRef(({ post, account }, ref) => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  function displayErrors(errors) {
    setErrors([errors]);
    setTimeout(() => {
      setErrors([]);
    }, 2000);
  }

  const content = post.files
    ? post.files.map((f) =>
        f.url.toLowerCase().includes(".mov") ? (
          <video key={f.url} controls style={{ width: "100%", height: "100%" }}>
            <source src={f.url} type="video/mp4" />
            Your browser does not support this
          </video>
        ) : (
          <img
            src={f.url}
            alt={"content"}
            key={f.url}
            style={{ width: "100%" }}
          />
        )
      )
    : null;

  function onTail() {
    fetch("/tails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_id: post.id,
        user_id: user ? user.id : null,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          dispatch(userActions.updateUserOnTail(data.tail));
          account
            ? dispatch(ahActions.updateAccountHolderOnTail(data))
            : dispatch(postsActions.updatePostOnTail(data));
        });
      } else r.json().then((data) => displayErrors(data.errors));
    });
  }

  function onUntail() {
    const tail = user.tails.find((uL) => uL.post_id === post.id);
    fetch(`/tails/${tail.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((r) => {
      if (r.ok) {
        dispatch(userActions.updateUserOnUntail(tail.id));
        r.json().then((post) =>
          account
            ? dispatch(
                ahActions.updateAccountHolderOnUnTail({
                  tail: tail,
                  post: post,
                })
              )
            : dispatch(
                postsActions.updatePostUntail({ tail: tail, post: post })
              )
        );
      } else r.json().then((data) => displayErrors(data.error));
    });
  }

  function handleTailClick(e) {
    if (e.target.src.includes("Grey")) {
      onTail();
    } else {
      onUntail();
    }
  }

  const userTailsThisPost = user
    ? user.tails.filter((uL) => uL.post_id === post.id)
    : null;

  function onFade() {
    fetch("/fades", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_id: post.id,
        user_id: user ? user.id : null,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          dispatch(userActions.updateUserOnFade(data.fade));
          account
            ? dispatch(ahActions.updateAccountHolderOnFade(data))
            : dispatch(postsActions.updatePostFade(data));
        });
      } else r.json().then((data) => displayErrors(data.errors));
    });
  }

  function onUnfade() {
    const fade = user.fades.find((uL) => uL.post_id === post.id);
    fetch(`/fades/${fade.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((r) => {
      if (r.ok) {
        dispatch(userActions.updateUserOnUnfade(fade.id));
        r.json().then((post) =>
          account
            ? dispatch(
                ahActions.updateAccountHolderOnUnFade({
                  fade: fade,
                  post: post,
                })
              )
            : dispatch(
                postsActions.updatePostFadesOnUnfade({ fade: fade, post: post })
              )
        );
      } else r.json().then((data) => displayErrors(data.error));
    });
  }

  function handleFadeClick(e) {
    if (e.target.src.includes("Grey")) {
      onFade();
    } else {
      onUnfade();
    }
  }

  const userFadesThisPost = user
    ? user.fades.filter((uL) => uL.post_id === post.id)
    : null;

  const comments =
    post.comments.length > 0 ? (
      post.comments.map((c) => (
        <div key={c.id} style={{ position: "relative" }}>
          <img
            src={c.user.profile_picture}
            alt={c.user.username}
            style={{ width: "5%", borderRadius: 20 }}
          />
          <span>
            <NavLink to={`/u/${c.user_id}`}>{c.user.username}: </NavLink>
            {c.comment}
          </span>
          {user && c.user.id === user.id ? (
            <button
              style={{ position: "absolute", right: 0 }}
              value={c.id}
              onClick={deleteComment}
            >
              x
            </button>
          ) : null}
        </div>
      ))
    ) : (
      <p>NO COMMENTS YET...</p>
    );

  function newComment(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: comment,
        post_id: post.id,
        user_id: user ? user.id : 0,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          account
            ? dispatch(ahActions.updateAccountHolderOnComment(data))
            : dispatch(postsActions.updatePostCommentsOnComment(data));
        });
      } else r.json().then((data) => displayErrors(data.errors));
    });
    setComment("");
  }

  function deleteComment(e) {
    fetch(`/comments/${e.target.value}`, {
      method: "DELETE",
      headers: { "Content-Type": "appliation/json" },
    }).then((r) =>
      r.json().then((data) => {
        account
          ? dispatch(ahActions.updateAccountHolderOnDeleteComment(data))
          : dispatch(postsActions.updatePostCommentsOnDelete(data));
      })
    );
  }

  function handleDeletePost() {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "appliation/json" },
    }).then((r) => {
      if (r.ok)
        account
          ? dispatch(ahActions.deletePosts(post.id))
          : dispatch(postsActions.deletePosts(post.id));
      else
        r.json().then((data) => {
          displayErrors(data.error);
        });
    });
  }

  function grade(innerText) {
    const result = innerText.toLowerCase();

    fetch("/grade", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: post.id, result: result }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          account
            ? dispatch(ahActions.updatePostsOnGrade(data))
            : dispatch(postsActions.updatePostsOnGrade(data));
        });
      } else r.json().then((err) => displayErrors(err));
    });
  }

  const inputEl = useRef(null);
  const prev = "<";
  const next = ">";

  const borderColor = post.result
    ? post.result === "w"
      ? { borderColor: "green" }
      : { borderColor: "red" }
    : {};

  const color = post.result
    ? post.result === "w"
      ? { color: "green" }
      : { color: "red" }
    : {};

  const lastTen = post.last_ten.map((post) =>
    post.result === "w" ? "✅" : "❌"
  );

  return (
    <div id={`post${post.id}`} className="post" ref={ref} style={borderColor}>
      <div>
        <span
          style={{
            float: "right",
            color: "rgb(140, 183, 240)",
            fontSize: "50%",
          }}
        >
          {new Date(post.created_at)
            .toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })
            .toUpperCase()}
        </span>
        <div className="userInfoContainer">
          <img
            src={post.user.profile_picture}
            alt={`${post.user.username}`}
            className="profilePicture"
          />
          <NavLink to={`/u/${post.user.id}`}>
            <strong>{post.user.username} </strong>
          </NavLink>
        </div>
        {account ? null : (
          <>
            <p style={{ textAlign: "left" }}>
              <strong>Record: </strong>
              {`${post.user.w} - ${post.user.l}`} (
              {Math.round((post.user.winP + Number.EPSILON) * 100)}%)
            </p>
            <p style={{ textAlign: "left" }}>
              <strong>Last Pick: </strong>
              {post.last_pick
                ? `${post.last_pick.pick} ${
                    post.last_pick.odds
                  } (${post.last_pick.result.toUpperCase()})`
                : "N/A"}
            </p>
            <p style={{ textAlign: "left" }}>
              <strong>Last 10: </strong>
              {post.last_pick ? lastTen : "N/A"}
            </p>
          </>
        )}
      </div>
      <h1 style={color}>
        {post.pick} {post.odds}
      </h1>
      <p>
        <strong>Start: </strong>
        {new Date(post.start).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })}
      </p>
      <div style={{ width: "100%" }}>
        {post.files && post.files.length > 1 ? (
          <>
            <Carousel ref={inputEl}>{content}</Carousel>
            <button
              className="prevbtn"
              onClick={() => inputEl.current.slidePrev()}
            >
              {prev}
            </button>
            <button
              className="nextbtn"
              onClick={() => inputEl.current.slideNext()}
            >
              {next}
            </button>
          </>
        ) : (
          content
        )}
      </div>
      <br />
      <p style={{ width: "95%", margin: "auto" }}>{post.caption}</p>
      <br />
      {errors.map((err) => (
        <h5 key={err} style={{ margin: "auto" }}>
          {err}
        </h5>
      ))}
      <div className="reactions-container">
        <div className="reaction">
          <img
            src={user && userTailsThisPost[0] ? thumbsUp : thumbsUpGrey}
            alt={"like button"}
            className="reaction-icon"
            onClick={handleTailClick}
          />{" "}
          <span>{`${post.tails.length} TAILS`}</span>
        </div>
        <div className="reaction">
          <img
            src={user && userFadesThisPost[0] ? thumbsDown : thumbsDownGrey}
            alt={"like button"}
            className="reaction-icon"
            onClick={handleFadeClick}
          />
          <span>{`${post.fades.length} FADES`}</span>
        </div>
      </div>
      <br />
      {comments}
      <br />
      <form onSubmit={newComment}>
        <input
          style={{ borderRadius: 10, border: "1px solid grey", width: "84%" }}
          placeholder="add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button>SUBMIT</button>
      </form>
      {user && post.user.id === user.id ? (
        <button
          className="delete-btn"
          style={{ marginTop: ".5em" }}
          onClick={handleDeletePost}
        >
          DELETE
        </button>
      ) : null}
      {user &&
      user.isAdmin &&
      new Date(post.start) < new Date(Date.now()) &&
      post.status === "pending" ? (
        <div className="grade-container">
          <button
            onClick={(e) => grade(e.target.innerText)}
            style={{ color: "white", background: "green" }}
          >
            W
          </button>
          <button
            onClick={(e) => grade(e.target.innerText)}
            style={{ color: "white", background: "red" }}
          >
            L
          </button>
        </div>
      ) : null}
    </div>
  );
});

export default Post;
