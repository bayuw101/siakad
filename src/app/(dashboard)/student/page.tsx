import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const StudentPage = () => {
  return (
    <div className="flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 h-full flex flex-col gap-4 ">
        <BigCalendar />
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col md:flex-row xl:flex-col gap-4">
        <div className="w-full md:w-2/4 xl:w-full">
          <EventCalendar />
        </div>
        <div className="w-full md:w-2/4 xl:w-full">
          <Announcements />
        </div>
      </div>
    </div>
  )
} 

export default StudentPage