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
      <button className="uk-button uk-button-default" type='button' onClick={handleClick}>
        Find Groups
      </button>
      {loading ? (
        <ul>
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
