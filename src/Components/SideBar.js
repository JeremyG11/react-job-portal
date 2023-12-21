import React from 'react';
import { BiHome, BiUser } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineAdjustmentsHorizontal, HiOutlineBell } from 'react-icons/hi2';
import { CiLogout } from 'react-icons/ci';
import { SiWorkplace } from 'react-icons/si';

const sideBarList = [
  {
    title: 'Profile',
    path: '/',
    icon: <BiUser />,
  },
  {
    title: 'Dashboard',
    path: '/',
    icon: <RxDashboard />,
  },
  {
    title: 'Jobs',
    path: '/',
    icon: <SiWorkplace />,
  },
  {
    title: 'Notifications',
    path: '/',
    icon: <HiOutlineBell />,
  },
  {
    title: 'Cars list',
    path: '/',
    icon: <BiHome />,
  },
  {
    title: 'Settings',
    path: '/',
    icon: <HiOutlineAdjustmentsHorizontal />,
  },
  {
    title: 'Logout',
    path: '/',
    icon: <CiLogout />,
  },
];
const SideBar = ({ showSideBar, setShowSideBar }) => {
  return (
    <>
      <div className="hiden py-3 before:wrapper ">
        <ul className="relative z-50 bg-white w-64 mt-1 shadow-2xl">
          <span className="wrapper"></span>
          <div className="flex items-start justify-between p-1">
            <button
              onClick={() => setShowSideBar(!showSideBar)}
              className="text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          {sideBarList.map((element) => {
            return (
              <li
                key={element.title}
                className="group flex items-center my-2 hover:bg-gray-100 hover:text-white rounded transition-all duration-500 cursor-pointer"
              >
                <span className="p-2 text-xl text-gray-500 rounded-full">
                  {element.icon}
                </span>
                <p className="ml-4 text-gray-500">{element.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
