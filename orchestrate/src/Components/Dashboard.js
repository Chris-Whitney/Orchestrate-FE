import "../Styling/Dashboard.css"
import { useEffect, useState } from "react";
import { getAllGroups } from "../Utils/api";
import { Events } from './Events'

export function Dashboard() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllGroups().then((groupsFromApi) => {
      setGroups(groupsFromApi);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
          {groups.map((group) => {
              return (
                  <li>
                      <h2>
                          {group.name}
                      </h2>
                  </li>
              )
          })}
      </ul>
      <Events/>
    </div>
  );
}
