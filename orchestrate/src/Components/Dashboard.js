import "../Styling/Dashboard.css";
import { Events } from "./Events";
import { UserVenue } from "./UserVenue";
import { UserGroups } from "./UserGroups";
import { useContext } from "react";
import { UserContext } from "../Utils/User";

export function Dashboard() {
  const { loggedUser } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome to Orchestrate, {loggedUser.name.first}</h1>
      <UserGroups />
      <Events />
      <UserVenue />
    </div>
  );
}
