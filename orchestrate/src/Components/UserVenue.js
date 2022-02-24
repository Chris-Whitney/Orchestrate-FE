import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getVenueById } from "../Utils/api";
import { UserContext } from "../Utils/User";

export function UserVenue() {
  const { loggedUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [venues, setVenues] = useState([]);

  const handleClick = () => {
    navigate("/venues");
  };

  useEffect(() => {
    loggedUser.venues.map((venue) => {
      getVenueById(venue.$oid).then((res) => {
        setVenues((currVenue) => {
          console.log(currVenue,"<<<curr")
           const newVenue = [res, ...currVenue] 
           return newVenue
        })
      })
    })

  }, []);

  return (
    <div>
      <div>
        <h1>venue</h1>
      </div>
      <button type="button" onClick={handleClick}>
        Find Venues
      </button>
      {loading ? (
        <div>
          {loggedUser.venues.map((venue) => {

            return (
              <ul>
                <li>
                  {
                    <Link to={`/venues/${venue.$oid}`}>
                      <p>{venues.name}</p>
                      <p>{venues.location.city}</p>
                      <p>{venues.contact.email}</p>
                      <img src={venues.avatar_url} />
                    </Link>
                  }
                </li>
              </ul>
            );
          })}
        </div>
      ) : null}
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
