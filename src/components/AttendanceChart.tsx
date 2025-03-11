"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present: 110,
    Absent: 12,
  },{
    name: 'Tue',
    Present: 100,
    Absent: 22,
  },{
    name: 'Wed',
    Present: 105,
    Absent: 17,
  },{
    name: 'Thu',
    Present: 117,
    Absent: 5,
  },{
    name: 'Friday',
    Present: 102,
    Absent: 20,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 gap-4 flex flex-col">
        {/* TITLE */}
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt="more-dark" width={20} height={20}/>
        </div>
        {/* CHART */}
        <div className="w-full h-[85%] relative">
            <ResponsiveContainer className="h-full w-full" >
                <BarChart
                    width={500}
                    height={400}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="1 1" vertical={false} stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{
                        fill: "#d1d5db",
                        fontSize: "14px"
                    }}/>
                    <YAxis axisLine={false} tickLine={false} tick={{
                        fill: "#d1d5db",
                        fontSize: "14px",
                    }}/>
                    <Tooltip 
                        contentStyle={{
                            borderRadius: "10px",
                            borderColor: "lightgray",
                            fontSize: "14px",
                        }}
                    />
                    <Legend 
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{
                            paddingTop: "0px",
                            paddingBottom: "30px"
                        }}
                    />
                    <Bar dataKey="Present" fill="#FAE27C" legendType="circle" radius={[10,10,0,0]} />
                    <Bar dataKey="Absent" fill="#C3EBFA" legendType="circle" radius={[10,10,0,0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AttendanceChart