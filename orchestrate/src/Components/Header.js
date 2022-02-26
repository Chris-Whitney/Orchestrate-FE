import "../Styling/Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Utils/User";

export function Header() {
  const { loggedUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="title">Orchestrate Logo</div>
      <nav className="nav-container">
        <Link to="/home">
          <button className="nav-link">Home</button>
        </Link>
        <Link to="/profile">
          <button className="nav-link">Profile</button>
        </Link>
        <div className="status">
          <Link to="/login">
            <button className="nav-link">Log out</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
