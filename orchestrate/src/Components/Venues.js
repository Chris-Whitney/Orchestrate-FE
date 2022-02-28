import { useState, useEffect } from "react";
import { getAllVenues } from "../Utils/api";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import CreateVenues from "./CreateVenues";

export function Venues() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleVenues = () => {
    setIsOpen(!isOpen);
  };

  useEffect(async () => {
    const allVenues = await getAllVenues();
    console.log(allVenues);
    setVenues(allVenues);
    setLoading(true);
  }, []);

  return (
    <>
      <Header />
      <div>
        <div>
          <input type='button' value='create venue' onClick={toggleVenues} />
          {isOpen && <CreateVenues handleClose={toggleVenues} />}
        </div>
        {loading ? (
          <div>
            <ul>
              {venues.map((venue) => {
                return (
                  <li key={venue.name}>
                    <Link to={`/venues/${venue._id}`}>
                      <h1>{venue.name}</h1>
                      <img
                        src={`https://avatars.dicebear.com/api/initials/${venue.name}.svg`}
                        style={{
                          height: "200px",
                          width: "200px",
                          "border-radius": "50%",
                        }}
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
    </>
  );
}
