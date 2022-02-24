import { useState, useEffect } from "react";
import { getAllGroups } from "../Utils/api";

export function UserGroups() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    getAllGroups().then((groupsFromApi) => {
      setGroups(groupsFromApi);
    });
  }, []);

  return (
    <div>
      
      <ul>
        {groups.map((group) => {
          return (
            <li key={group.name}>
              <h2>{group.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
