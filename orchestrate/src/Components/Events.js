import Calendar from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { differenceInCalendarDays, startOfToday, startOfTomorrow } from 'date-fns';

 export function Events() {

  const [value, onChange] = useState(new Date())
 


    return (
        <div>
        <h1>Calendar</h1>
        <Calendar onChange={onChange} value={value}/>
        </div>
    )

}






