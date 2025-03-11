"use client"
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      Income: 4000,
      Expense: 2400,
    },{
      name: 'Feb',
      Income: 3400,
      Expense: 5400,
    },{
      name: 'Mar',
      Income: 4200,
      Expense: 1400,
    },{
      name: 'Apr',
      Income: 1000,
      Expense: 1400,
    },{
      name: 'May',
      Income: 2300,
      Expense: 2200,
    },{
      name: 'Jun',
      Income: 4100,
      Expense: 1400,
    },{
      name: 'Jul',
      Income: 5200,
      Expense: 5400,
    },{
      name: 'Aug',
      Income: 1000,
      Expense: 2400,
    },{
      name: 'Sep',
      Income: 4600,
      Expense: 2100,
    },{
      name: 'Oct',
      Income: 5200,
      Expense: 4200,
    },{
      name: 'Nov',
      Income: 2200,
      Expense: 1900,
    },{
      name: 'Dec',
      Income: 1000,
      Expense: 2900,
    },
    
  ];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 gap-4 flex flex-col">
        {/* TITLE */}
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt="more-dark" width={20} height={20}/>
        </div>
        {/* CHART */}
        <div className="w-full h-full relative">
        <ResponsiveContainer width="100%" height="90%">
            <LineChart
                width={500}
                height={500}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} tick={{
                    fill: "#d1d5db",
                    fontSize: "14px"
                }}/>
                <YAxis axisLine={false} tickLine={false} tickMargin={20} tick={{
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
                    align="center"
                    verticalAlign="top"
                    wrapperStyle={{
                        paddingTop: "0px",
                        paddingBottom: "30px"
                    }}
                />
                <Line type="monotone" dataKey="Income" stroke="#FAE27C" strokeWidth={4} />
                <Line type="monotone" dataKey="Expense" stroke="#C3EBFA" strokeWidth={4} />
            </LineChart>
      </ResponsiveContainer>
        </div>
    </div>   
  )
}

export default FinanceChart