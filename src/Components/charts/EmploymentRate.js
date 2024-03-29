import React, { useState } from 'react';

import {
  PieChart,
  Pie,
  Cell,
  Sector,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '2019', value: 400, color: '#00f' },
  { name: '2020', value: 300, color: '#f00' },
  { name: '2021', value: 200, color: '#f0f' },
  { name: '2022', value: 450, color: '#000' },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    payload,
    percent,
    value,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#0f0">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#da23eb"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#da23eb"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="#da23eb"
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill="#f0f" stroke="5" />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        fontSize="14px"
        fontWeight={500}
        color="#ddd"
        textAnchor={textAnchor}
        fill="#999"
      >{`${payload.name} ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        fontSize="12px"
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const EmploymentRate = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF0000'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {' '}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend align="left" layout="vertical" iconType="line" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EmploymentRate;
