import React, { createRef } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import AnimateBubbles from "./AnimateBubbles";

function Feed() {
  const posts = useSelector((state) => state.posts.posts);

  // const [message, setMessage] = useState("");
  const postsCopy = [...posts];

  const winners = postsCopy.filter((p) => p.result === "w");
  console.log(winners);

  const losers = postsCopy.filter((p) => p.result === "l");
  console.log(losers);

  const sortedPosts = postsCopy.sort((a, b) => b.confidence - a.confidence);
  console.log(sortedPosts);

  const filteredAndSorted = [...sortedPosts, ...winners, ...losers];
  console.log(filteredAndSorted);

  const postCards = filteredAndSorted.map((post) => (
    <Post post={post} key={post.id} account={false} ref={createRef()} />
  ));

  return (
    <div className="feed">
      {/* <h3 style={{ textAlign: "center" }}>FEED</h3> */}
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
