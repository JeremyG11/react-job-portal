import React from 'react';
import img1 from '../../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg';
import img2 from '../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg';
import img3 from '../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
const Hired = () => {
  return (
    <div className="my-4 bg-green-50  shadow-gray-200 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-green-500 to-teal-500 rounded-lg">
            <svg
              height="1000px"
              width="100px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#000000"
              className="p-2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <circle
                  style={{ fill: '#389475' }}
                  cx="256"
                  cy="256"
                  r="256"
                ></circle>{' '}
                <path
                  style={{ fill: '#53df9e' }}
                  d="M508.999,295.296L320.026,106.324l-26.981,4.289v-0.727l-101.786,8.435l65.603,65.603V333.29 l2.791,2.791L256,409.345l87.355,87.355C429.852,465.301,494.623,388.615,508.999,295.296z"
                ></path>{' '}
                <path
                  style={{ fill: '#85fdff' }}
                  d="M312.213,102.655H199.79c-5.611,0-10.159,4.548-10.159,10.159c0,5.61,4.548,10.159,10.159,10.159 h45.037v235.682l11.174,50.69l11.174-50.69V122.973h45.037c5.611,0,10.159-4.548,10.159-10.159 C322.37,107.205,317.823,102.655,312.213,102.655z"
                ></path>{' '}
                <path
                  style={{ fill: '#85fdff' }}
                  d="M312.213,102.655h-56.785V406.74l0.574,2.603l11.174-50.69v-235.68h45.037 c5.611,0,10.159-4.548,10.159-10.159C322.37,107.205,317.823,102.655,312.213,102.655z"
                ></path>{' '}
              </g>
            </svg>
          </div>

          <div className="flex-shrink-0 ml-3">
            <p className="font-nunito text-gray-600 font-bold text-sm leading-none">
              Recently Hired
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

export default Hired;
