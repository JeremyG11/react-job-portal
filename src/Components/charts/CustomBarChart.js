import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    Location: 'Addis Ababa',
    males: 67,
    females: 76,
    age: 24,
  },

  {
    Location: 'Mekelle',
    males: 54,
    females: 67,
    age: 44,
  },
  {
    Location: 'Bahir dar',
    males: 65,
    females: 44,
    age: 23,
  },
  {
    Location: 'Hawassa',
    males: 54,
    females: 65,
    age: 45,
  },

  {
    Location: 'Adama',
    males: 76,
    females: 74,
    age: 33,
  },
  {
    Location: 'Gambela',
    males: 54,
    females: 34,
    age: 23,
  },
];
const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barGap={0}
        borderRadius={15}
      >
        <CartesianGrid opacity={0.2} vertical={false} />
        <XAxis dataKey="Location" axisLine={false} tickCount={7} angle={-10} />
        <YAxis axisLine={false} tickLine={false} tickCount={8} />
        <Tooltip content={<CustomTooltip />} />
        <Legend align="right" verticalAlign="top" />
        <Bar dataKey="males" stackId="a" fill="#4f46e5" barSize={25} />
        <Bar dataKey="females" stackId="a" fill="#93c5fd" barSize={25} />
        <Bar dataKey="age" fill="#fda4af" barSize={25} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, label }) => {
  if (active) {
    return (
      <div className="p-2 text-xs shadow text-center text-white bg-black rounded">
        <h3>{label}</h3>
      </div>
    );
  }
  return null;
};

export default CustomBarChart;
