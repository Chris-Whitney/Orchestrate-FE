import grouplogo from "../Images/group.jpeg";
import "../Styling/Groups.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllGroups } from "../Utils/api";
import { Header } from "./Header";
import CreateGroup from "./CreateGroup";

export function Groups() {
  const [allGroups, setAllGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleGroup = () => {
    setIsOpen(!isOpen);
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
      <div className="groups-main">
        <div>
          <input className="add-group-button" type="button" value="Add Group" onClick={toggleGroup} />
          {isOpen && <CreateGroup handleClose={toggleGroup} />}
        </div>
        {loading ? (
          <div className="display-groups">
            <ul>
              {allGroups.map((group) => {
                return (
                  <div className="group-card">
                    <li key={`g${group._id}`}>
                      <Link to={`/groups/${group._id}`}>
                        <div id="group-name">
                          <p>{group.name}</p>
                        </div>
                        <div className="logo-contact">
                          <div id="group-img">
                            <img className="group-logo"
                              src={grouplogo}
                            />
                          </div>
                          <div className="right-side">
                            <div id="group-contact">
                              <p>Group Contact: {group.contact.name}</p>
                            </div>

                            <div className="members">
                              {group.members.length === 1 ? (
                                <p>member: {group.members.length} </p>
                              ) : (
                                <p>members: {group.members.length} </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        ) : (
          <div data-uk-spinner></div>
        )}
      </div>
    </>
  );
}
