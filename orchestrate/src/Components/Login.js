import "../Styling/Login.css";
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { login, getUserByUsername } from "../Utils/api";
import { UserContext } from "../Contexts/User";



export function Login() {
  const { loggedUser, setUser, setLoggedIn } = useContext(UserContext)
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [username, setUsername] = useState("")
  const [status, setStatus] = useState('')

  const navigate = useNavigate()

  const handleChangeUser = (event) => {
    setUsernameInput(event.target.value)
  };

  const handleChangePass = (event) => {
    setPasswordInput(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(usernameInput, passwordInput).then(res => {
      setUsername(usernameInput)
      setStatus(res)
    })
  };
  useEffect(() => {
    if (status === "Success") {
      getUserByUsername(username).then(res => {
        console.log(res, "<-- user object")
        setUser(res)
        setLoggedIn(true)
        navigate('/home')
      })
    }
  }, [navigate, status, setLoggedIn, setUser, username])



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
