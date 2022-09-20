import React, { useState, createRef } from "react";
import Post from "./Post";
import AnimateBubbles from "./AnimateBubbles";

function Feed({
  posts,
  loadMorePosts,
  user,
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
  const [message, setMessage] = useState("");

  const sortedPosts = posts.sort((a, b) => b.confidence - a.confidence);

  const postCards = sortedPosts.map((post) => (
    <Post
      post={post}
      key={post.id}
      user={user}
      updateUserTailsOnTail={updateUserTailsOnTail}
      updateUserTailsOnUntail={updateUserTailsOnUntail}
      updateUserFadesOnFade={updateUserFadesOnFade}
      updateUserFadesOnUnfade={updateUserFadesOnUnfade}
      updatePostUntail={updatePostUntail}
      updatePostOnTail={updatePostOnTail}
      updatePostFade={updatePostFade}
      updatePostFadesOnUnfade={updatePostFadesOnUnfade}
      updatePostCommentsOnComment={updatePostCommentsOnComment}
      updatePostCommentsOnDelete={updatePostCommentsOnDelete}
      deletePosts={deletePosts}
      updatePostsOnGrade={updatePostsOnGrade}
      account={false}
      ref={createRef()}
    />
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
