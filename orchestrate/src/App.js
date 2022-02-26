import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./Components/Welcome";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Dashboard } from "./Components/Dashboard";
import { UserContext } from "./Utils/User";
import { SingleVenue } from "./Components/SingleVenue";
import { Venues } from "./Components/Venues";
import { Groups } from "./Components/Groups";
import { Events } from "./Components/Events";

function App() {
  const [loggedUser, setLoggedUser] = useState({
    "name": {
      "first": "test",
      "last": "Stevenson"
    },
    "location": {
      "postcode": "m1 09s",
      "city": "Manchester",
      "country": "England"
    },
    "_id": "6214962c21f19fe1e7796760",
    "avatar_url": "https://avatars.dicebear.com/api/adventurer/erge.svg",
    "username": "testing",
    "email": "steve@gmail.com",
    "instruments": [
      "Harp"
    ],
    "hash": "bb14d0f83f2ce00da607d67adb505ec594a881173d153182a42cef2ede2315609d7974218ef8df473b88a426d2ce3d18d43fd8624a2b82154d71df1cd37cbe54",
    "salt": "a3b36389891b123655d698d813ec8520fa73008747e2143bf1eca1762e08c169",
    "group": [],
    "friends": [],
    "venues": [],
    "__v": 0,
    "events": []
  });

  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedUser, setLoggedUser, isLoggedIn }}>
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
