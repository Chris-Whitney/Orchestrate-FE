import "../Styling/Register.css";
import { postNewUser } from "../Utils/api";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

<script src="js/uikit-icons.min.js"></script>;

export function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: {
        first: e.target[0].value,
        last: e.target[1].value,
      },
      location: {
        city: e.target[2].value,
        postcode: e.target[3].value,
        country: e.target[4].value,
      },
      email: e.target[5].value,
      username: e.target[6].value,
      password: e.target[7].value,
      avatar_url: e.target[8].value,
    };
    postNewUser(user).then((res) => {
      if (res) {
        alert("Account created");
        navigate("/login");
      }
    });
  };

  return (
    <div className="register-main">
      <br></br>
      <h1>Register</h1>
      <p>Sign-up using the form below</p>
      <form className="uk-inline" id="myForm" onSubmit={handleSubmit}>
        <legend className="uk-legend">
          First name:
          <input
            className="uk-input"
            type="text"
            placeholder="first name"
            minLength={2}
            name="firstname"
            required
          />
        </legend>
        <br></br>
        <br></br>
        <legend class="uk-legend">
          Last name:
          <input
            className="uk-input"
            type="text"
            placeholder="last name"
            name="lastname"
            required
          />
        </legend>
        <br></br>
        <br></br>
        <legend class="uk-legend">
          City:
          <input
            className="uk-input"
            type="text"
            placeholder="city"
            name="city"
            required
          />
        </legend>
        <br></br>
        <br></br>
        <legend class="uk-legend">
          Postcode:
          <input
            className="uk-input"
            type="text"
            placeholder="postcode"
            name="postcode"
            required
          />
        </legend>
        <br></br>
        <br></br>
        <legend class="uk-legend">
          Country:
          <input
            className="uk-input"
            type="text"
            placeholder="country"
            name="country"
            required
          />
        </legend>
        <br></br>
        <br></br>
        <legend class="uk-legend">
          Email:
          <input
            className="uk-input"
            type="text"
            placeholder="email"
            name="email"
            required
          />
        </legend>
        <br></br>
        <br></br>
        <legend class="uk-legend">
          Choose a username:
          <input
            className="uk-input"
            type="text"
            placeholder="username"
            name="username"
            required
          />
        </legend>
        <br></br>
        <br></br>
        <legend class="uk-legend">
          Create a password:
          <input
            className="uk-input"
            type="password"
            placeholder="password"
            name="password"
            autoComplete="off"
            required
          />
        </legend>
        <br></br>
        <br></br>
        <legend class="uk-legend">
          Upload a profile picture:
          <input class="uk-button uk-button-default uk-button-small" type="file" placeholder="profile-img" name="profile-img" />
        </legend>
        <br></br>
        <br></br>
        <button className="uk-button uk-button-default" type="submit">
          Sign-up
        </button>
      </form>
      <br></br>
      <br></br>
    </div>
  );
}
