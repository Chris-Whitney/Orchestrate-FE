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
                    <img
                      src={group.avatar_url}
                      style={{ height: "200px", width: "400px" }}
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
      ) : null}
    </div>
  );
}
