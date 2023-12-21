import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
  AreaChart,
} from 'recharts';

const CustomLineChart = () => {
  const data = [
    {
      date: 'Jan',
      jobs: 0,
    },
    {
      date: 'Feb',
      jobs: 10,
    },
    {
      date: 'Mar',
      jobs: 60,
    },
    {
      date: 'Apr',
      jobs: 70,
    },
    {
      date: 'May',
      jobs: 100,
    },
    {
      date: 'Jun',
      jobs: 54,
    },
    {
      date: 'Jul',
      jobs: 50,
    },
    {
      date: 'Aug',
      jobs: 80,
    },
    {
      date: 'Sept',
      jobs: 100,
    },
    {
      date: 'Oct',
      jobs: 90,
    },
    {
      date: 'Nov',
      jobs: 110,
    },
    {
      date: 'Dec',
      jobs: 100,
    },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width="100%" height="80%" data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity={0.2} vertical={false} />
          <XAxis dataKey="date" tickCount={10} />
          <YAxis dataKey="jobs" tickCount={10} />

          <Tooltip content={<CustomTooltip />} />
          <Legend align="right" verticalAlign="top" />
          <Area
            type="monotone"
            dataKey="jobs"
            stroke="#8884d8"
            strokeWidth={6}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

const CustomTooltip = ({ active, label }) => {
  if (active) {
    return (
      <div className="p-2 text-xs shadow text-center text-white bg-black rounded">
        <h3 className="">{label}</h3>
        <h3 className="">{label.content}</h3>
      </div>
    );
  }
  return null;
};

export default CustomLineChart;
