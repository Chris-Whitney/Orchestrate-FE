import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from './Components/Welcome';
import { Login } from './Components/Login';
import { Register } from "./Components/Register";
import { Dashboard } from './Components/Dashboard';
import { UserContext } from './Utils/User';
import { SingleVenue } from './Components/SingleVenue';
import { Venues } from './Components/Venues';





function App() {

const [loggedUser, setLoggedUser] = useState({
  "_id": {
    "$oid": "620fb8208aa0f467bc6e63f5"
  },
  "name": {
    "first": "Steve",
    "last": "Stevenson"
  },
  "avatar_url": "https://avatars.dicebear.com/api/adventurer/erge.svg",
  "username": "Steve",
  "email": "steve@gmail.com",
  "location": {
    "postcode": "m1 09s",
    "city": "Manchester",
    "country": "England"
  },
  "instruments": [
    "Harp"
  ],
  "group": [
    {
      "$oid": "620fc4a5ad45abc5b6ee6547"
    }
  ],
  "friends": [],
  "venues": [
    {
      "$oid": "620fbd088a86c442a7083532"
    },
    {
      "$oid": "6213739ee4ff4e521a587e2b"
    }
  ],
  "__v": 2,
  "password": "password"
});

const isLoggedIn = false;

  return (
    <BrowserRouter>
    <UserContext.Provider value={{loggedUser, setLoggedUser, isLoggedIn}}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Dashboard />}/>
        <Route path="/venues" element={<Venues />}/>
        <Route path="/venues/:_id" element={<SingleVenue/>}/>
      </Routes>
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
