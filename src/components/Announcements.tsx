"use client"
import Image from 'next/image';

const data = [
    {
      "id": 2,
      "title": "New Feature Release",
      "date": "2025-03-20",
      "description": "We are excited to announce the release of a new feature that will enhance user experience."
    },
    {
      "id": 3,
      "title": "Holiday Notice",
      "date": "2025-04-01",
      "description": "The office will be closed on April 1st for a public holiday."
    },
    {
      "id": 4,
      "title": "Quarterly Meeting",
      "date": "2025-04-10",
      "description": "Join us for the quarterly meeting to discuss company performance and future plans."
    }
];

const Announcements = () => {
   
    return (
      <div className="bg-white p-4 rounded flex flex-col gap-1">
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Announcements</h1>
                <span className="text-xs text-gray-400">View More</span>
            </div>
            {data.map((announcement) => (
                <div key={announcement.id} className="bg-sikolahanSkyLight p-5 rounded-md  odd:bg-sikolahanPurpleLight">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-gray-600">{announcement.title}</h1>
                        <span className="text-xs text-gray-400 bg-white rounded-lg py-1 px-2">{announcement.date}</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">{announcement.description}</p>
                </div>
            ))}
        </div>
      </div>
    );
}

export default Announcements