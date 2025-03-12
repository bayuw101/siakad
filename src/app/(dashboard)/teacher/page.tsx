import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const TeacherPage = () => {
  return (
    <div className="flex gap-4 flex-col xl:flex-row flex-1">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 h-full flex flex-col gap-4 ">
        <BigCalendar />
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col md:flex-row xl:flex-col gap-4">
        <div className="w-full md:w-2/4 xl:w-full">
          <Announcements />
        </div>
      </div>
    </div>
  )
} 

export default TeacherPage