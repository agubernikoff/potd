import React, { createRef } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import AnimateBubbles from "./AnimateBubbles";

function Feed() {
  const posts = useSelector((state) => state.posts.posts);

  // const [message, setMessage] = useState("");
  const postsCopy = [...posts];

  const winners = postsCopy.filter((p) => p.result === "w");

  const losers = postsCopy.filter((p) => p.result === "l");

  const sortedPosts = postsCopy
    .filter((p) => !p.result)
    .sort((a, b) => b.confidence - a.confidence);

  const filteredAndSorted = [...sortedPosts, ...winners, ...losers];

  const postCards = filteredAndSorted.map((post) => (
    <Post post={post} key={post.id} account={false} ref={createRef()} />
  ));

  return (
    <div className="feed">
      {posts[0] ? null : (
        <>
          <h3 style={{ textAlign: "center" }}>No picks yet.</h3>
          <h3 style={{ textAlign: "center" }}>
            Make a pick, and tell us why it's a lock!
          </h3>
        </>
      )}
      <AnimateBubbles>{postCards}</AnimateBubbles>
      {/* {message ? (
        <p>{message}</p>
      ) : (
        <button
          onClick={() => {
            fetch("/posts")
              .then((r) => r.json())
              .then((data) => {
                console.log(data);
                loadMorePosts(data);
                if (data.length === posts.length)
                  setMessage("YOU'RE ALL CAUGHT UP.");
              });
          }}
        >
          LOAD MORE
        </button>
      )} */}
    </div>
  );
}

export default Feed;
