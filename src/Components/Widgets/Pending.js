import React from 'react';
import img1 from '../../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg';
import img2 from '../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg';
import img3 from '../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
const Pending = () => {
  return (
    <div className="bg-orange-50 shadow-gray-200 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
            <svg
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="iconify iconify--twemoji"
              preserveAspectRatio="xMidYMid meet"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#ffc658"
                  d="M21 18c0-2.001 3.246-3.369 5-6c2-3 2-10 2-10H8s0 7 2 10c1.754 2.631 5 3.999 5 6s-3.246 3.369-5 6c-2 3-2 10-2 10h20s0-7-2-10c-1.754-2.631-5-3.999-5-6z"
                ></path>
                <path
                  fill="#fff"
                  d="M18 2h-8s0 4 1 7c1.304 3.912 6 4.999 6 9s0 13 1 13s1-9 1-13s4.697-5.088 6-9c1-3 1-7 1-7h-8z"
                ></path>
                <path
                  fill="#ff5638"
                  d="M30 34a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h20a2 2 0 0 1 2 2zm0-32a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h20a2 2 0 0 1 2 2z"
                ></path>
              </g>
            </svg>
          </div>

          <div className="flex-shrink-0 ml-3">
            <p className="font-nunito text-gray-600 font-bold text-sm word-break leading-none">
              Pending Interviews
            </p>
            <h3 className="text-sm font-normal text-gray-500">
              Today&apos;s Money
            </h3>
          </div>
        </div>
        <div className="flex -space-x-4">
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={img3}
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={img2}
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={img1}
            alt=""
          />
          <a
            className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +99
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pending;
