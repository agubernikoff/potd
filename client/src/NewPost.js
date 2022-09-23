import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postsActions } from "./store/posts-slice";
import Loading from "./Loading";

function NewPost({ pick, odds, start, clearSelections }) {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);
  const [caption, setCaption] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("pick", pick);
  formData.append("odds", odds);
  formData.append("caption", caption);
  formData.append("user_id", user.id);
  formData.append("start", start);
  for (let i = 0; i < files.length; i++) {
    formData.append("files[]", files[i]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (files.length > 10) {
      setErrors(["Too many files. Maximum allowed is 10"]);
      setIsLoading(false);
    } else {
      fetch("/posts", {
        method: "POST",
        body: formData,
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setIsLoading(false);
            dispatch(postsActions.updatePosts(data));
            navigate("/");
          });
        } else {
          r.json().then((data) => {
            setErrors(data.errors);
            setIsLoading(false);
          });
        }
      });
    }
  }

  return (
    <div className="newPost">
      <form onSubmit={handleSubmit} className="newPostForm">
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
        <h1 style={{ textAlign: "center" }}>
          {pick} ({odds})
        </h1>
        <label htmlFor="files">Upload photos or videos:</label>
        <input
          type="file"
          accept=".jpeg,.png,.gif,.mov,.mp4"
          name="files"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        ></input>
        <br />
        <label htmlFor="caption">Caption:</label>
        <textarea
          type="text"
          id="description"
          autoComplete="off"
          rows="10"
          cols="75"
          placeholder="Tell us why it's a lock"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <br />
        <button variant="fill" type="submit" style={{ marginTop: 10 }}>
          {isLoading ? <Loading /> : "SUBMIT"}
        </button>
        {errors.map((err) => (
          <h3 key={err} className="errors">
            {err}
          </h3>
        ))}
      </form>
    </div>
  );
}

export default NewPost;
