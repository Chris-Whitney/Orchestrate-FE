import "../Styling/Dashboard.css"
import { Events } from './Events'
import { UserVenue } from "./UserVenue";
import { UserGroups } from './UserGroups';

export function Dashboard() {

    return (
        <div className="dashboard-component">
            <h1>Dashboard</h1>
            <UserGroups />
            <Events />
            <UserVenue />
        </div>
    );
}
