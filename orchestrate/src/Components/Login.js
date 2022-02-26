import "../Styling/Login.css";
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { login, getUserByUsername } from "../Utils/api";
import { UserContext } from "../Utils/User";


export function Login() {

  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [status, setStatus] = useState('')
  const [user, setUser] = useState({})

  const handleChangeUser = (event) => {
    setUsernameInput(event.target.value)
  };

  const handleChangePass = (event) => {
    setPasswordInput(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(usernameInput, passwordInput).then(res => {
      setStatus(res)
    })
  };
  const Redirect = (user) => {
    useNavigate(user._id)
  }
  useEffect(async () => {
    if (status === "Success") {
      const newUser = await getUserByUsername(usernameInput)
      setUser(newUser)
    }
  }, [status])



  return (
    <div className="login-main">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>Please enter your username and password</p>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user"></span>
          <input onChange={handleChangeUser} type="text" required></input>
        </div>
        <div className="uk-inline">
          <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
          <input onChange={handleChangePass} type="password" required></input>
        </div>
        <button type="submit">Login</button>
      </form >
      {
        (status === "Failed")
          ? <p>Username or password incorrect</p>
          : null
      }
      <p>Don't have an account?</p>
      <p><a href="/register">Register</a> now, it's quick and easy to get started!</p>
    </div >
  );
}
