import { useState, useEffect } from "react";
import { getAllVenues } from "../Utils/api";
import { Link } from "react-router-dom";

export function Venues() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const allVenues = await getAllVenues();
    console.log(allVenues)
    setVenues(allVenues);
    setLoading(true);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <ul>
            {venues.map((venue) => {
              return (
                <li key={venue.name}>
                  <Link to={`/venues/${venue._id}`}>
                    <h1>{venue.name}</h1>
                    <img
                      src={venue.avatar_url}
                      style={{ height: "200px", width: "400px" }}
                    />
                    <p>Location: {venue.location.city}</p>
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
