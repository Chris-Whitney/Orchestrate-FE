import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllGroups, getSingleUser } from "../Utils/api";
import { CreateGroup } from "./CreateGroup";
import { Header } from "./Header";

export function Groups() {
  const [allGroups, setAllGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleCreateGroup, setToggleCreateGroup] = useState(false);

  const handleClick = () => {
    setToggleCreateGroup(true);
  };

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
              <button onClick={handleClick}>Create Group</button>
            </div>
            {/* {toggleCreateGroup ? <CreateGroup /> : null } */}
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
