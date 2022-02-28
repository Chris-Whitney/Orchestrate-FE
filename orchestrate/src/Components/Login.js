import "../Styling/Login.css";
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { login, getUserByUsername } from "../Utils/api";
import { UserContext } from "../Contexts/User";



export function Login() {
  const { setUser, isLoggedIn, setLoggedIn } = useContext(UserContext)
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
        setUser(res)
        setLoggedIn(true)
        navigate('/home')
      })
    }
  }, [navigate, status, setLoggedIn, setUser, username])



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
        <button type="submit">Login</button>
      </form >
      {
        (status === "Failed")
          ? <p>Username or password incorrect</p>
          : null
      }
      <p>Don't have an account?</p>
      <p>
        <a class='register-link' href="/register">Register</a> now, it's quick and easy to get
        started!
      </p>
    </div>
  );
}
