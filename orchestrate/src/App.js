import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./Components/Welcome";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Dashboard } from "./Components/Dashboard";
import { UserContext } from "./Contexts/User";
import { SingleVenue } from "./Components/SingleVenue";
import { Venues } from "./Components/Venues";
import { Groups } from "./Components/Groups";
import { Events } from "./Components/Events";

function App() {
  const [loggedUser, setUser] = useState({})
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedUser, setUser, isLoggedIn, setLoggedIn }}>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Dashboard />} />
            <Route path='/venues' element={<Venues />} />
            <Route path='/venues/:_id' element={<SingleVenue />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/events' element={<Events />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
