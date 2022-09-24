import React from "react";
import { useNavigate } from "react-router-dom";

function NotSignedIn({ clearSelections }) {
  const nav = useNavigate();
  return (
    <div className="newPostForm">
      <button
        style={{
          width: "2em",
          position: "absolute",
          right: "1em",
          top: "1em",
        }}
        onClick={clearSelections}
      >
        x
      </button>
      <h1 style={{ textAlign: "center" }}>Please sign in to make a post</h1>
      <button onClick={() => nav("/login")}>Sign in</button>
    </div>
  );
}

export default NotSignedIn;
