import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import { useEffect, useState, useContext } from 'react'
import { setUserEvent } from '../Utils/api'
import { differenceInCalendarDays, startOfToday, startOfTomorrow } from 'date-fns';
import { UserContext } from '../Utils/User'

export function Events() {

    const [eventList, setEventList] = useState([{"to":{"day":16,"year":2022,"month":2},"from":{"day":15,"year":2022,"month":2},"_id":"6218bac3a2f71bdf9b0a8347"},{"to":{"day":16,"year":2022,"month":2},"from":{"day":15,"year":2022,"month":2},"_id":"6218bafca2f71bdf9b0a8353"},{"to":{"day":16,"year":2022,"month":2},"from":{"day":15,"year":2022,"month":2},"_id":"6218bb42a2f71bdf9b0a8368"}])
    const { loggedUser } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });
    const updateEvents = () => {
        setUserEvent(selectedDayRange, loggedUser._id.$oid).then((res) => {
        setEventList(res)
        setIsLoading(false)
        })
    }

    useEffect(() => {
    })

    return (
        <div>
            <h4>Event Component</h4>
            <div className="uk-flex uk-flex-center">
                {isLoading 
                ? eventList.map((event) => {
                    console.log(eventList.length)
                    const from = event.from
                    const to = event.to
                    return ( <div key={event._id} className="uk-card uk-card-default uk-card-body">{`from ${from.day}/${from.month}/${from.year}`}<br/>{`to ${to.day}/${to.month}/${to.year}`}</div>
                    )
                })
                : <p>Loading</p>
                }
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
                                renderFooter={() => (<>
                                    <div><input placeholder='Enter event title'></input></div>
                                    <p className='uk-margin'>
                                        <button className='uk-button uk-button-primary uk-button-small'
                                            type="button"
                                            onClick={() => {
                                                setSelectedDayRange({
                                                    from: null,
                                                    to: null
                                                })
                                            }}
                                        >
                                            Reset Value!
                                        </button>
                                        <button className='uk-margin-left uk-button uk-button-primary uk-button-small'
                                            type="button"
                                            onClick={() => {updateEvents()}}
                                        >
                                            Add Event
                                        </button>
                                    </p></>)}
                            />
                        </div>
                    </div>
                </li>
            </ul >
        </div>



    )
}






