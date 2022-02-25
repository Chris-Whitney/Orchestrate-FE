import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import { useEffect, useState } from 'react'
import { setUserEvent } from '../Utils/api'
import { differenceInCalendarDays, startOfToday, startOfTomorrow } from 'date-fns';

export function Events() {

    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });
    const updateEvents = () => {
        setUserEvent().then(res => {
            console.log(res)
        })
    }
    console.log(selectedDayRange)
    return (
        <div>
            <h4>Event Componant</h4>
            <div class="uk-flex uk-flex-center">
                <div class="uk-card uk-card-default uk-card-body">Event</div>
                <div class="uk-card uk-card-primary uk-card-body uk-margin-left">Event</div>
                <div class="uk-card uk-card-secondary uk-card-body uk-margin-left">Event</div>
            </div>
            <ul data-uk-accordion>
                <li>
                    <button className="uk-button uk-button-default uk-accordion-title ">
                        Add Event <span uk-icon="calendar"></span>
                    </button>
                    <div className="uk-accordion-content">
                        <div class="uk-flex uk-flex-center">
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
                                            onClick={() => { }}
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






