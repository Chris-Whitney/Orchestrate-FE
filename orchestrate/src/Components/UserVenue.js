import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/User";
import { getUserVenues } from "../Utils/api";


export function UserVenue() {
  const { loggedUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [newVenue, setNewVenue] = useState([]);
  const handleClick = () => {
    navigate("/venues");
  };

  useEffect(() => {
    getUserVenues(loggedUser._id)
      .then((res) => {
        setNewVenue(res);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <h4>venue componant</h4>
      </div>
      <button type='button' onClick={handleClick}>
        Find Venues
      </button>
      {loading ? (
        <div>
          <ul>
            {newVenue.map((venue) => {
              return (
                <li key={`v${venue._id}`}>
                  {
                    <Link to={`/venues/${venue._id}`}>
                      <p>{venue.name}</p>
                      <p>{venue.location.city}</p>
                      <p>{venue.contact.email}</p>
                      <img src={venue.avatar_url} />
                    </Link>
                  }
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        null
      )}
    </div>
  );
}

{
  /* <Link to={`/venues/${loggedUser.venues[0].$oid}`}>
<p>{venues.name}</p>
<p>{venues.location.city}</p>
<p>{venues.contact.email}</p>
<img src={venues.avatar_url}/>
</Link> */
}
