import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <h3 className="text-2xl md:text-7xl text-white  font-bold">
      <CountUp end={1000} separator="," />
    </h3>
  );
};

export default Counter;
