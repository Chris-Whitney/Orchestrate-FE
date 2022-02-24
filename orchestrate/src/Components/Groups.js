import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllGroups, getSingleUser } from "../Utils/api";

export function Groups() {
  const [allGroups, setAllGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllGroups().then((groups) => {
      console.log(groups);
      setAllGroups(groups);
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    getSingleUser();
  });

  return (
    <div>
      {loading ? (
        <div>
          <ul>
            {allGroups.map((group) => {
              return (
                <li key={`g${group._id}`}>
                  <Link to={`/groups/${group._id}`}>
                    <p>{group.name}</p>
                    <p>
                      {getSingleUser(group.owner).then((res) => {
                        return res.username;
                      })}
                    </p>
                    <p>{group.avatar_url}</p>
                    <div>
                      <p>Group Contact:</p>
                      <ul>
                        <li>{group.contact.name}</li>
                        <li>{group.contact.email}</li>
                      </ul>
                    </div>
                    <div>
                      {" "}
                      Group Members:
                      <ul>
                        {group.members.map((member) => {
                          return <li>{member}</li>;
                        })}
                      </ul>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
