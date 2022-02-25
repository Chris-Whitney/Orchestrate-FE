import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import { useEffect, useState, useContext } from 'react'
import { getSingleUser, setUserEvent, getUserEvents } from '../Utils/api'
import { differenceInCalendarDays, startOfToday, startOfTomorrow } from 'date-fns';
import { UserContext } from '../Utils/User'

export function Events() {

    const [eventList, setEventList] = useState([])
    const { loggedUser } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });
    const [eventTitle, setEventTitle] = useState('')
    const [refresh, setRefresh] = useState(false)

    const updateEvents = () => {
        setUserEvent(selectedDayRange, loggedUser._id.$oid, eventTitle).then((res) => {
            setEventList(res)
            setIsLoading(false)
            setRefresh(!refresh)
        })
    }

    const inputHandler = (event) => {
        setEventTitle(event.target.value)
    }

    useEffect(() => {
        getUserEvents(loggedUser._id.$oid).then((events) => {
            setEventList(events)
        })
    }, [refresh])

    return (
        <div>
            <h4>Event Component</h4>
            <div className="uk-flex uk-flex-center">
                {isLoading 
                ? eventList.map((event) => {
                    const { title = 'rehearsal'} = event 
                    const from = event.from
                    const to = event.to
                    return ( <div key={event._id} className="uk-card uk-card-default uk-card-body">{title} <br/>{`from ${from.day}/${from.month}/${from.year}`}<br/>{`to ${to.day}/${to.month}/${to.year}`}</div>
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
                                    <div><input onChange={inputHandler} placeholder='Enter event title'></input></div>
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






