import '../Styling/Welcome.css'
import { useNavigate } from "react-router-dom";
import background from "../Images/orchestrate.mp4"
import logo from "../Images/logo.png"

export function Welcome() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleRegisterClick = () => {
      navigate('/register')
    }

  return (
    <>
    <video autoPlay loop muted id='video'><source src={background} type='video/mp4'/></video>
    <div className='welcome-main'>

      <img src={logo} alt="orchestrate_logo" id="logo"/>
      {/* logo, possiby dynamic background, onClick through to login */}
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
    </div>
  </>
  );
}
