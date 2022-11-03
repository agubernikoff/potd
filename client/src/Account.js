import React, { useEffect, useState, createRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";
import { ahActions } from "./store/ah-slice";
import Loading from "./Loading";
import Post from "./Post";

function Account() {
  const user = useSelector((state) => state.user.user);
  const accountHolder = useSelector((state) => state.ah.accountHolder);

  const dispatch = useDispatch();

  // const [accountHolder, setAccountHolder] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        dispatch(ahActions.setAccountHolder(data));
        setUsername(data.username);
        setEditFormPicture(data.profile_picture);
        window.scrollTo(0, 0);
      });
  }, [dispatch, id]);

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
          dispatch(userActions.setUser(user));
          dispatch(ahActions.setAccountHolder(user));
          setDisplayOnly(true);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const posts = accountHolder
    ? [...accountHolder.posts]
        .sort((a, b) => b.id - a.id)
        .map((post) => (
          <Post
            key={post.id}
            post={{ ...post, user: accountHolder }}
            account={true}
            ref={createRef()}
          />
        ))
    : null;

  return (
    <div className="feed">
      {accountHolder ? (
        <>
          {user && accountHolder.id === user.id ? (
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
                      setEditFormPicture(
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  ></input>
                  <label>USERNAME</label>
                  <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username ? username : ""}
                    placeholder={username}
                    className="acctUsernameInput"
                    onChange={(e) => setUsername(e.target.value.toLowerCase())}
                  />
                  <label
                    style={changePassword ? null : { visibility: "hidden" }}
                  >
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
              <button type="submit">
                {isLoading ? <Loading /> : "SUBMIT"}
              </button>
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
              {accountHolder.league_records.map((league) => (
                <p>
                  <strong>{league.league} RECORD: </strong>
                  {`${league.record} (${Math.round(
                    (league.winP + Number.EPSILON) * 100
                  )}%)`}
                </p>
              ))}
              <p className="backP">
                <strong>TAIL/FADE SUCCESS: </strong>
                {`${successfulFades + successfulTails} - ${
                  totalTails + totalFades - (successfulFades + successfulTails)
                }`}{" "}
                ({Math.round((accountHolder.backP + Number.EPSILON) * 100)}%)
              </p>
              {posts}
            </>
          ) : null}{" "}
        </>
      ) : (
        <div style={{ marginTop: "1em" }}>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Account;
