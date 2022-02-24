import "../Styling/Register.css";
import {postNewUser} from '../Utils/api'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstname: e.target[0].value,
            lastname: e.target[1].value,
            city: e.target[2].value,
            postcode: e.target[3].value,
            country: e.target[4].value,
            email: e.target[5].value,
            username: e.target[6].value,
            password: e.target[7].value,
            profile_img: e.target[8].value
          }
        postNewUser(user)
  }

  return (
    <div className="register-main">
      <h1>Register</h1>
      <p>Sign-up using the form below</p>
      <form id='myForm' onSubmit={handleSubmit}>
        <label>
          First name:
          <input type="text" placeholder="first name" minLength={2} name='firstname' required />
        </label>
        <br></br>
        <label>
          Last name:
          <input type="text" placeholder="last name" name='lastname' required />
        </label>
        <br></br>
        <label>
          City:
          <input type="text" placeholder="city" name='city' required />
        </label>
        <br></br>
        <label>
          Postcode:
          <input type="text" placeholder="postcode" name='postcode' required />
        </label>
        <br></br>
        <label>
          Country:
          <input type="text" placeholder="country" name='country' required />
        </label>
        <br></br>
        <label>
          Email:
          <input type="text" placeholder="email" name='email' required />
        </label>
        <br></br>
        <label>
          Choose a username:
          <input type="text" placeholder="username" name='username' required />
        </label>
        <br></br>
        <label>
          Create a password:
          <input type="password" placeholder="password" name='password' autoComplete='off' required />
        </label>
        <br></br>
        <label>
          Upload a profile picture:
          <input type="file" placeholder="profile-img" name='profile-img' />
        </label>
        <br></br>
        <button type="submit">
          Sign-up
        </button>
      </form>
    </div>
  );
}
