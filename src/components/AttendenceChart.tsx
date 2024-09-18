"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Seg',
    present: 4,
    absent: 1,
  },
  {
    name: 'Ter',
    present: 6,
    absent: 0,
  },
  {
    name: 'Qua',
    present: 3,
    absent: 1,
  },
  {
    name: 'Qui',
    present: 5,
    absent: 1,
  },
  {
    name: 'Sex',
    present: 8,
    absent: 2,
  },
  {
    name: 'Sáb',
    present: 12,
    absent: 3,
  },
];

const AttendenceChart = () => {
  return (
    <div className="bg-white rounded-lg w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Atendimentos</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
          <Bar dataKey="present" fill="#fae27c" legendType="circle" radius={[10, 10, 0, 0]} />
          <Bar dataKey="absent" fill="#c3ebfa" legendType="circle" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendenceChart