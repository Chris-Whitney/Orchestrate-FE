import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { useEffect, useState, useContext } from "react";
import {
  getSingleUser,
  setUserEvent,
  getUserEvents,
  removeEvent,
} from "../Utils/api";
import {
  differenceInCalendarDays,
  startOfToday,
  startOfTomorrow,
} from "date-fns";
import { UserContext } from "../Utils/User";
import "../Styling/Events.css";

export function Events() {
  const [eventList, setEventList] = useState([]);
  const { loggedUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  const [eventTitle, setEventTitle] = useState("");
  const [refresh, setRefresh] = useState(false);

  const updateEvents = () => {
    setUserEvent(selectedDayRange, loggedUser._id.$oid, eventTitle).then(() => {
      setRefresh(!refresh);
    });
  };

  const inputHandler = (event) => {
    setEventTitle(event.target.value);
  };

  const deleteEvent = (id) => {
    removeEvent(id, loggedUser._id.$oid).then(() => {
      setRefresh(!refresh);
    });
  };

  useEffect(() => {
    getUserEvents(loggedUser._id.$oid).then((events) => {
      setEventList(events);
      setIsLoading(false);
    });
  }, [refresh]);

  return (
    <div>
      <h4>Event Component</h4>
      <div className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
        {!isLoading ? (
          eventList.map((event) => {
            const { title = "rehearsal" } = event;
            const from = event.from;
            const to = event.to;
            return (
              <div
                key={event._id}
                className="uk-flex uk-flex-center@m uk-flex-right@l"
              >
                {title}
                <br />
                {`from ${from.day}/${from.month}/${from.year}`}
                <br />
                {`to ${to.day}/${to.month}/${to.year}`}
                <div>
                  <button onClick={deleteEvent(event._id)}>X</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
      <ul data-uk-accordion>
        <li>
          <button className="uk-button uk-button-default uk-accordion-title ">
            Add Event <span uk-icon="calendar"></span>
          </button>
          <div className="uk-accordion-content">
            <div className="uk-flex uk-flex-center">
              <Calendar
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                colorPrimary="#0fbcf9"
                colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                calendarClassName="responsive-calendar"
                shouldHighlightWeekends
                //disabledDays={[{year: 0000, month: 0, day:00}]}
                renderFooter={() => (
                  <>
                    <div>
                      <input
                        className="uk-input"
                        onChange={inputHandler}
                        placeholder="Enter event title"
                      ></input>
                    </div>
                    <p className="uk-margin">
                      <button
                        className="uk-margin-bottom uk-button uk-button-primary uk-button-small"
                        type="button"
                        onClick={() => {
                          setSelectedDayRange({
                            from: null,
                            to: null,
                          });
                        }}
                      >
                        Reset
                      </button>
                      <button
                        className="uk-margin-left uk-margin-bottom uk-button uk-button-primary uk-button-small"
                        type="button"
                        onClick={() => {
                          updateEvents();
                        }}
                      >
                        Add Event
                      </button>
                    </p>
                  </>
                )}
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
