"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const localizer = momentLocalizer(moment);

interface BigCalendarProps {
  calendarName ?: string;
}

const BigCalendar = ({calendarName="Schedule"}: BigCalendarProps) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView:View) => {
    setView(selectedView);
    console.log(calendarEvents);
  }
  return (
    <div className="bg-white rounded-md p-4">
        <h1 className="font-bold text-md">{calendarName}</h1>
        <div>
          <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week","day"]}
            view={view}
            style={{ height: window.innerHeight, minHeight: 700 }}
            onView={handleOnChangeView}
            min={new Date(2025,1,0,8,0,0)}
            max={new Date(2025,1,0,18,0,0)}
          />
        </div>
    </div>
  )
}

export default BigCalendar