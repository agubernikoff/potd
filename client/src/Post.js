import React, { useState, useRef, forwardRef } from "react";
import { NavLink } from "react-router-dom";
import heartIcon from "./assets/heartIcon.png";
import emptyHeartIcon from "./assets/emptyHeartIcon.png";
import Carousel from "react-elastic-carousel";

const Post = forwardRef(
  (
    {
      post,
      user,
      updateUserTailsOnTail,
      updatePostOnTail,
      updateUserTailsOnUntail,
      updatePostUntail,
      updateUserFadesOnFade,
      updateUserFadesOnUnfade,
      updatePostFade,
      updatePostFadesOnUnfade,
      updatePostCommentsOnComment,
      updatePostCommentsOnDelete,
      deletePosts,
    },
    ref
  ) => {
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
          f.url.includes(".mov") ? (
            <video
              key={f.url}
              controls
              style={{ width: "100%", height: "100%" }}
            >
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
        body: JSON.stringify({ post_id: post.id, user_id: user.id }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            updateUserTailsOnTail(data.tail);
            updatePostOnTail(data);
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
          updateUserTailsOnUntail(tail.id);
          r.json().then((post) => updatePostUntail(tail, post));
        } else r.json().then((data) => console.log(data));
      });
    }

    function handleTailClick(e) {
      if (e.target.src.includes("empty")) {
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
        body: JSON.stringify({ post_id: post.id, user_id: user.id }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            updateUserFadesOnFade(data.fade);
            updatePostFade(data);
            console.log(data.post);
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
          updateUserFadesOnUnfade(fade.id);
          r.json().then((post) => updatePostFadesOnUnfade(fade, post));
        } else r.json().then((data) => console.log(data));
      });
    }

    function handleFadeClick(e) {
      if (e.target.src.includes("empty")) {
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
            {c.user.id === user.id ? (
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
          user_id: user.id,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            updatePostCommentsOnComment(data);
          });
        } else r.json().then((data) => displayErrors(data.errors));
      });
      setComment("");
    }

    function deleteComment(e) {
      console.log(e.target.value);
      fetch(`/comments/${e.target.value}`, {
        method: "DELETE",
        headers: { "Content-Type": "appliation/json" },
      }).then((r) =>
        r.json().then((data) => {
          updatePostCommentsOnDelete(data);
        })
      );
    }

    function handleDeletePost() {
      fetch(`/posts/${post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "appliation/json" },
      }).then((r) => {
        if (r.ok) deletePosts(post.id);
      });
    }

    const inputEl = useRef(null);
    const prev = "<";
    const next = ">";

    return (
      <div id={`post${post.id}`} className="post" ref={ref}>
        <div>
          <span style={{ float: "right", color: "#807f7f", fontSize: "50%" }}>
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
              <strong>{post.user.username}</strong>
            </NavLink>
          </div>
        </div>
        <h1>
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
              src={user && userTailsThisPost[0] ? heartIcon : emptyHeartIcon}
              alt={"like button"}
              className="reaction-icon"
              onClick={handleTailClick}
            />{" "}
            <span>{`${post.tails.length} TAILS`}</span>
          </div>
          <div className="reaction">
            <img
              src={user && userFadesThisPost[0] ? heartIcon : emptyHeartIcon}
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
        {post.user.id === user.id ? (
          <button
            className="delete-btn"
            style={{ marginTop: ".5em" }}
            onClick={handleDeletePost}
          >
            DELETE
          </button>
        ) : null}
      </div>
    );
  }
);

export default Post;
