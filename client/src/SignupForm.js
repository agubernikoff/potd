import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profile from "./assets/profile.jpeg";
import Loading from "./Loading";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile_picture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function fetchAsFile(path) {
    const response = await fetch(path);
    const blob = await response.blob();
    return new File([blob], path);
  }

  useEffect(() => {
    fetchAsFile(profile).then((data) => setProfilePicture(data));
  }, []);

  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("profile_picture", profile_picture);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/users", {
      method: "POST",
      body: formData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          margin: "auto",
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="profile_picture">Profile Picture</label>
        <input
          type="file"
          accept="image/jpeg,image/png"
          name="profile_picture"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        ></input>
        <button type="submit" style={{ marginTop: 10 }}>
          {isLoading ? <Loading /> : "Sign Up"}
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

export default SignUpForm;
