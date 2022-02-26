import "../Styling/Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Utils/api";
import { UserContext } from "../Utils/User";

export function Login() {
  const { setLoggedUser } = useContext(UserContext);

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleChangeUser = (e) => {
    console.log(e.target.value);
    setUsernameInput(e.target.value);
  };

  const handleChangePass = (e) => {
    console.log(e.target.value);
    setPasswordInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(usernameInput, passwordInput).then((res) => {
      setLoggedUser(res);
    });
    // if verify is user then navigate to dashboard
    // else msg : user does not exist, click Register if you don't have an account
  };

  return (
    <div className="login-main">
      <br></br>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>Already a member? Please enter your username and password</p>
        <div className="uk-inline">
          <span className="uk-form-icon" data-uk-icon="icon: user"></span>
          <input
            className="uk-input"
            onChange={handleChangeUser}
            type="text"
            required
          ></input>
        </div>
        <div className="uk-inline">
          <span
            className="uk-form-icon uk-form-icon-flip"
            data-uk-icon="icon: lock"
          ></span>
          <input
            className="uk-input"
            onChange={handleChangePass}
            type="password"
            required
          ></input>
        </div>
        <button
          class="uk-button uk-button-default uk-button-small"
          type="submit"
        >
          Log in
        </button>
      </form>
      <p>Don't have an account?</p>
      <p>
        <a href="/register">Register</a> now, it's quick and easy to get
        started!
      </p>
    </div>
  );
}
