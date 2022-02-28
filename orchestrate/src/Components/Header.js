import "../Styling/Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/User";
import { useContext, useEffect } from "react";

export function Header() {
  const { isLoggedIn, setLoggedIn, loggedUser, setUser } = useContext(UserContext)

  useEffect(() => {
    if (!isLoggedIn) {
      setUser({})
    }
  }, [isLoggedIn])

  return (
    <div className='header'>
      <div className='title'>Orchestrate Logo</div>
      <nav className='nav-container'>
        <Link to='/home'>
          <button className='nav-link'>Home</button>
        </Link>
        {isLoggedIn ?
          <Link to='/account'>
            <button className='nav-link'>Account</button>
          </Link>
          : null
        }
        <div className='messages'>
          {isLoggedIn ?
            <Link to='/messages'>
              <button className='nav-link'>Messages</button>
            </Link>
            : null
          }
        </div>
        <div className='status'>
          <Link to='/login'>
            <button onClick={() => setLoggedIn(false)} className='nav-link'>{isLoggedIn ? "Log Out" : null}</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
