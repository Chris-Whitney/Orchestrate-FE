import { useState, useEffect, useContext } from "react";
import { getAllVenues, postVenue } from "../Utils/api";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { UserContext } from "../Contexts/User";
import "../Styling/Venues.css";

export function Venues() {
  const { loggedUser } = useContext(UserContext);
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [newVenue, setNewVenue] = useState({
    name: "",
    avatar_url: "https://avatars.dicebear.com/api/adventurer/bridgewater.svg",
    location: {
      street: "",
      number: "",
      postcode: "",
      city: "",
      country: "",
    },
    contact: {
      name: `${loggedUser.name.first} ${loggedUser.name.last}`,
      number: parseInt("0789123659"),
      email: loggedUser.email,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    postVenue(newVenue).then((res) => {
      setVenues((currVenues) => {
        return [res[0], ...currVenues];
      });
      setRefresh(!refresh);
      setNewVenue({
        name: "",
        avatar_url:
          "https://avatars.dicebear.com/api/adventurer/bridgewater.svg",
        location: {
          street: "",
          number: "",
          postcode: "",
          city: "",
          country: "",
        },
        contact: {
          name: `${loggedUser.name.first} ${loggedUser.name.last}`,
          number: parseInt("0789123659"),
          email: loggedUser.email,
        },
      });
    });

    //setAdded(true);
  };

  const nameHandler = (event) => {
    let newVenueName = event.target.value;
    let updatedVenue = { ...newVenue };
    updatedVenue.name = newVenueName;
    updatedVenue.avatar_url = `https://avatars.dicebear.com/api/initials/${newVenueName}.svg`;
    setNewVenue(updatedVenue);
  };

  const streetHandler = (event) => {
    let newVenueStreet = event.target.value;
    let updatedVenue = { ...newVenue };
    updatedVenue.location.street = newVenueStreet;
    setNewVenue(updatedVenue);
  };
  const numberHandler = (event) => {
    let newVenueNumber = event.target.value;
    let updatedVenue = { ...newVenue };
    updatedVenue.location.number = newVenueNumber;
    setNewVenue(updatedVenue);
  };
  const postcodeHandler = (event) => {
    let newVenuePostcode = event.target.value;
    let updatedVenue = { ...newVenue };
    updatedVenue.location.postcode = newVenuePostcode;
    setNewVenue(updatedVenue);
  };
  const cityHandler = (event) => {
    let newVenueCity = event.target.value;
    let updatedVenue = { ...newVenue };
    updatedVenue.location.city = newVenueCity;
    setNewVenue(updatedVenue);
  };
  const countryHandler = (event) => {
    let newVenueCountry = event.target.value;
    let updatedVenue = { ...newVenue };
    updatedVenue.location.country = newVenueCountry;
    setNewVenue(updatedVenue);
  };
  useEffect(() => {
    async function fetchData() {
      const allVenues = await getAllVenues();
      setVenues(allVenues);
    }
    fetchData();

    setLoading(true);
  }, [refresh]);
  // added

  return (
    <>
      <Header />
      <ul data-uk-accordion>
        <li className='uk-close'>
          <input
            type='button'
            className='uk-accordion-title'
            value='Add Venue'
          />

          <div className='uk-accordion-content'>
            {/* {added === false ? ( */}
            <>
              <form onSubmit={handleSubmit} className='uk-form-horizontal'>
                <h1>New Venue</h1>
                <div>
                  <label>Venue Name : </label>
                  <input
                    type='text'
                    onChange={nameHandler}
                    value={newVenue.name}
                  />
                </div>
                <div>
                  <div>
                    <label>Street : </label>
                    <input
                      type='text'
                      onChange={streetHandler}
                      value={newVenue.location.street}
                    />
                  </div>
                  <div>
                    <label>Number : </label>
                    <input
                      type='text'
                      onChange={numberHandler}
                      value={newVenue.location.number}
                    />
                  </div>
                  <div>
                    <label>Postcode : </label>
                    <input
                      type='text'
                      onChange={postcodeHandler}
                      value={newVenue.location.postcode}
                    />
                  </div>
                  <div>
                    <label>City : </label>
                    <input
                      type='text'
                      onChange={cityHandler}
                      value={newVenue.location.city}
                    />
                  </div>
                  <div>
                    <label>Country : </label>
                    <input
                      type='text'
                      onChange={countryHandler}
                      value={newVenue.location.country}
                    />
                  </div>
                </div>
                <button>create</button>
              </form>
            </>
            )
            {/* : (
              <div>
                <h3>Venue Added!!!</h3>
              </div>
            )} */}
          </div>
        </li>
      </ul>

      {loading ? (
        <div className='display-groups'>
          <ul>
            {venues.map((venue) => {
              return (
                <li key={venue.name} className='group-card'>
                  <Link to={`/venues/${venue._id}`} className='link'>
                    <h1>{venue.name}</h1>
                    <div className='uk-flex uk-flex-around'>
                      <img
                        src={`https://avatars.dicebear.com/api/initials/${venue.name}.svg`}
                        style={{
                          height: "200px",
                          width: "200px",
                          "border-radius": "50%",
                        }}
                        alt={venue.name}
                      />
                      <p>Location: {venue.location.city}</p>
                    </div>
                    <br />
                    {venue.contact.name ===
                    `${loggedUser.name.first} ${loggedUser.name.last}` ? (
                      <button>Delete Venue</button>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}
