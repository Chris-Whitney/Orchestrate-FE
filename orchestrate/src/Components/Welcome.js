import '../Styling/Welcome.css'
import { useNavigate } from "react-router-dom";

export function Welcome() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login')
    }
 
  return (
    <div className='welcome-main'>
      <h1>Welcome</h1>
      {/* logo, possiby dynamic background, onClick through to login */}
      <img onClick={handleClick} src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1190,w_2120,x_0,y_0/f_auto,q_auto,w_1100/v1554933625/shape/mentalfloss/52912-istock-523871055.jpg"></img>
    </div>
  );
}
