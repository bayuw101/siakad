"use client"
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Teacher Meeting",
        time: "10:00 AM - 11:00 AM",
        description: "Monthly team meeting to discuss project updates."
    },
    {
        id: 2,
        title: "Client Presentation",
        time: "01:00 PM - 02:00 PM",
        description: "Presentation of the new project proposal to the client."
    },
    {
        id: 3,
        title: "Workshop",
        time: "03:00 PM - 05:00 PM",
        description: "Workshop on the latest web development trends."
    }
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <div className="bg-white p-4 rounded flex flex-col gap-4">
        <Calendar onChange={onChange} value={value} />
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Events</h1>
                <Image src="/moreDark.png" alt="more-dark" width={20} height={20}/>
            </div>
            {events.map((event) => (
                <div key={event.id} className="border-2 border-t-4 border-t-sikolahanSky p-5 rounded-md border-gray-100 odd:border-t-sikolahanPurple">
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-gray-600">{event.title}</h1>
                        <span className="text-xs text-gray-400">{event.time}</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-xs">{event.description}</p>
                </div>
            ))}
        </div>
      </div>
    );
}

export default EventCalendar