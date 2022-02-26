import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getUserGroups } from "../Utils/api";
import { UserContext } from "../Utils/User";

export function UserGroups() {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  const { loggedUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    navigate("/groups");
  };
  useEffect(() => {
    getUserGroups(loggedUser._id).then((groupsFromApi) => {
      setGroups(groupsFromApi);
      setLoading(true);
    });
  }, [loggedUser._id]);

  return (
    <div>
      <p>Orchestrate Groups are where the magic happens...</p>
      <button
        class="uk-button uk-button-default uk-button-small"
        type="button"
        onClick={handleClick}
      >
        Find a Group
      </button>
      {loading ? (
        <ul class="uk-list">
          <p>Groups you belong to:</p>
          {groups.map((group) => {
            return (
              <li key={group.name}>
                <h2>{group.name}</h2>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
