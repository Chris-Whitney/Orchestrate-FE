import "../Styling/Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className='header'>
      <div className='title'>Orchestrate Logo</div>
      <nav className='nav-container'>
        <Link to='/home'>
          <button className='nav-link'>Home</button>
        </Link>
        <Link to='/profile'>
          <button className='nav-link'>Profile</button>
        </Link>
        <div className='messages'>
          <Link to='/messages'>
            <button className='nav-link'>Messages</button>
          </Link>
        </div>
        <div className='status'>
          <Link to='/login'>
            <button className='nav-link'>Log out</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
