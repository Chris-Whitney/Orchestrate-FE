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
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Events } from "./Components/Events";
import { Messages } from "./Components/Messages";

function App() {
  const [loggedUser, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedUser, setUser, isLoggedIn, setLoggedIn }}>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Dashboard />} />
            <Route path='/venues' element={<Venues />} />
            <Route path='/venues/:_id' element={<SingleVenue />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/events' element={<Events />} />
            <Route path='/messages' element={<Messages />} />
          </Routes>
        </div>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
