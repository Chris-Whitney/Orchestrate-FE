import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllGroups } from "../Utils/api";
import { Header } from "./Header";

export function Groups() {
  const [allGroups, setAllGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleCreateGroup, setToggleCreateGroup] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {};

  useEffect(() => {
    getAllGroups().then((groups) => {
      setAllGroups(groups);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <div>
            <div>
              <ul data-uk-accordion>
                <li>
                  <button className='uk-accordion-title'>Create Group</button>
                  <div className='uk-accordion-content'>
                    <form>
                      <h1>hello</h1>
                      <div>
                        <label htmlFor=''>Name of the Group : </label>
                        <input type='text' />
                      </div>

                      <div>
                        <label htmlFor=''>Your avatar: </label>
                        <input type='text' />
                      </div>
                      <div>
                        <label htmlFor=''>Main Contact :</label>
                        <input type='text' />
                      </div>
                      <div>
                        <label htmlFor=''>Email :</label>
                        <input type='email' />
                      </div>
                      <button>create</button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>

            <ul>
              {allGroups.map((group) => {
                return (
                  <li key={`g${group._id}`}>
                    <Link to={`/groups/${group._id}`}>
                      <p>{group.name}</p>
                      <img
                        src={`https://avatars.dicebear.com/api/initials/${group.name}.svg`}
                        style={{
                          height: "200px",
                          width: "200px",
                          "border-radius": "50%",
                        }}
                      />

                      <p>Group Contact: {group.contact.name}</p>

                      {group.members.length === 1 ? (
                        <p>member: {group.members.length} </p>
                      ) : (
                        <p>members: {group.members.length} </p>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div uk-spinner></div>
        )}
      </div>
    </>
  );
}
