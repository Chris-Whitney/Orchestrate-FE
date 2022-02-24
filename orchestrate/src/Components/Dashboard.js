import "../Styling/Dashboard.css"
import { UserVenue } from "./UserVenue";
import { UserGroups } from './UserGroups';

export function Dashboard() {
  
  return (
    <div>
      <h1>Dashboard</h1>
      <UserGroups />
      <UserVenue />
    </div>
  );
}
