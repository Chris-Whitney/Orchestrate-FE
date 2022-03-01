import { useState, useEffect } from "react";
import { getAllVenues } from "../Utils/api";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import CreateVenues from "./CreateVenues";
import "../Styling/Venues.css"

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
        <div className="add=button">
          <button className="add-venue-button" onClick={toggleVenues}>Add Venues</button>
          {isOpen && <CreateVenues handleClose={toggleVenues} />}
        </div>
        {loading ? (
          <div className="uk-position-relative uk-visible-toggle uk-light">
            <ul className="data-uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@m data-uk-grid">
              {venues.map((venue) => {
                return (
                  <li key={venue.name}>
                    <Link to={`/venues/${venue._id}`}>
                      <h1>{venue.name}</h1>
                      <img
                        src={`https://avatars.dicebear.com/api/initials/${venue.name}.svg`}
                        style={{
                          height: "50px",
                          width: "50px",
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
