import "../Styling/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="register-main">
      <h1>Register</h1>
      <p>Sign-up using the form below</p>
      <form>
        <label>
          First name:
          <input type="text" placeholder="first name" minLength={2} required />
        </label>
        <br></br>
        <label>
          Last name:
          <input type="text" placeholder="last name" required />
        </label>
        <br></br>
        <label>
          Choose a username:
          <input type="text" placeholder="username" required />
        </label>
        <br></br>
        <label>
          Create a password:
          <input type="password" placeholder="password" required />
        </label>
        <br></br>
        <label>
          City:
          <input type="text" placeholder="city" required />
        </label>
        <button onSubmit={handleSubmit} type="submit">
          Sign-up
        </button>
      </form>
    </div>
  );
}
