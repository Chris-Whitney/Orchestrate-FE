import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/User";
import { Header } from "./Header";

export function Account() {
  const { loggedUser, isLoggedIn } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [newInst, setNewInst] = useState("");

  const instrumentsInput = (event) => {
    setNewInst(event.target.value);
  };

  const AddInstruments = () => {
    loggedUser.instruments.push(newInst);
    console.log(loggedUser.instruments);
  };
  useEffect(() => {}, [editing]);

  return (
    <>
      <Header />
      <div className='uk-flex-column uk-flex-around'>
        {" "}
        <div className='uk-width-2-3'>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
        <div className='uk-flex uk-width-1-1 uk-flex-around uk-margin-medium-top'>
          <div>
            <img
              src={`https://avatars.dicebear.com/api/initials/${loggedUser.name.first} ${loggedUser.name.last}.svg`}
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "50%",
              }}
            />
          </div>
          <section>
            {editing ? (
              <form>
                <div>
                  <label htmlFor=''>Name :</label>
                  <input type='text' placeholder={loggedUser.name.first} />

                  <input type='text' placeholder={loggedUser.name.last} />
                </div>
                <div>
                  <label htmlFor=''>Email :</label>
                  <input type='text' placeholder={loggedUser.email} />
                </div>
                <div>
                  <label htmlFor=''>Postcode :</label>
                  <input
                    type='text'
                    placeholder={loggedUser.location.postcode}
                  />
                  <br />
                  <label htmlFor=''>City :</label>
                  <input type='text' placeholder={loggedUser.location.city} />
                  <br />
                  <label htmlFor=''>Country :</label>
                  <input
                    type='text'
                    placeholder={loggedUser.location.country}
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor=''>Instruments :</label>
                  <input type='text' onChange={() => instrumentsInput()} />
                  <button
                    onClick={() => {
                      AddInstruments();
                    }}>
                    Add
                  </button>
                  <br />
                  <div>
                    {loggedUser.instruments.map((instrument) => {
                      return (
                        <button>
                          {instrument}
                          <span data-uk-icon='close'></span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <button>Apply Changes</button>
              </form>
            ) : (
              <>
                <p>{loggedUser.username}</p>
                <p>
                  Name:{loggedUser.name.first} {loggedUser.name.last}
                </p>
                <p>Email: {loggedUser.email}</p>
                <p>
                  Location : {loggedUser.location.postcode},{" "}
                  {loggedUser.location.city}, {loggedUser.location.country}
                </p>
                <ul>
                  Instruments:
                  {loggedUser.instruments.map((instrument) => {
                    return <li key={loggedUser.name}>{instrument}</li>;
                  })}
                </ul>
              </>
            )}
          </section>
        </div>{" "}
      </div>
    </>
  );
}
