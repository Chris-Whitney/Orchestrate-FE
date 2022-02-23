import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./Components/Welcome";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Dashboard } from "./Components/Dashboard";
import { UserContext } from "./Utils/User";
import { Header } from "./Components/Header";

function App() {
  const [loggedUser, setLoggedUser] = useState("");

  const isLoggedIn = loggedUser;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedUser, setLoggedUser, isLoggedIn }}>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Dashboard />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
