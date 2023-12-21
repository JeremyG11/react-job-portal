import React from 'react';

const Button = ({ title }) => {
  return (
    <button className="group relative inline-block overflow-hidden px-8 py-4 bg-white text-blue-400 focus:outline-none">
      <span className="absolute inset-y-0 left-0 w-0 bg-red-600 transition-all group-hover:w-full group-active:bg-red-500"></span>

      <span className="relative tracking-widest font-medium transition-colors group-hover:text-white">
        {title}
      </span>
    </button>
  );
};

export default Button;
