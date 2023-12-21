import React, { useEffect, useState } from 'react';
import bgImage from '../assets/meeting-room.jpg';
import { TfiMenuAlt } from 'react-icons/tfi';
import CustomLineChart from '../Components/charts/CustomLineChart';
import UserList from '../Components/UserList';
import EmploymentRate from '../Components/charts/EmploymentRate';
import Trends from '../Components/Widgets/Pending';
import Pending from '../Components/Widgets/Hired';
import Progress from '../Components/Widgets/Progress';
import Badge from '../Components/Badge';
import SideBar from '../Components/SideBar';
import CustomBarChart from '../Components/charts/CustomBarChart';
import { Fade } from '../Utils/Fade.motion';

const Dashboard = () => {
  //   const [menuState, setMenuState] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="relative top-0  ">
      <div
        className="h-96 bg-no-repeat bg-cover bg-top bg-opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      >
        <Fade>
          <h1 className="px-8 lg:pl-20 pt-40 text-3xl lg:text-7xl font-extrabold text-white">
            Dashboard{' '}
          </h1>
        </Fade>
        <div className="px-8 lg:pl-20">
          <button
            onClick={() => setShowSideBar(!showSideBar)}
            className="bg-white p-4 mt-10 shadow-xl"
          >
            <TfiMenuAlt className="text-xl" />
          </button>
          {showSideBar && (
            <SideBar
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar}
            />
          )}
        </div>
      </div>

      <div className="bg-gray-50 py-10">
        <div className="mb-4 pt-8 px-10 lg:px-20">
          <div className="col-span-3 ">
            <nav className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-8 py-3 max-w-screen-xl">
                <h3 className="text-lg md:text-2xl font-bold text-gray-400">
                  Dashboard
                </h3>
                <div className="flex-1 flex items-center justify-between">
                  <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                    <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-gray-100 rounded-full hover:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                      </svg>

                      <span className="sr-only">Notifications</span>
                      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2 dark:border-gray-900">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="grid grid-cols-1 my-4 gap-4 min-w-full lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg bg-gray-100 lg:col-span-2">
              <div className="flex items-center h-full bg-white rounded-lg flex-wrap justify-evenly md:justify-between p-5 ">
                <Badge />
              </div>
            </div>
            <div className="rounded-lg bg-white">
              <div className="p-3  h-full rounded-lg">
                <Pending />
                <Trends />
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 lg:px-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="h-80 px-4 py-8  rounded-lg bg-white">
            <h3 className="text-gray-400 -mt-4 text-xl">Anually Hiring Rate</h3>
            <EmploymentRate />
          </div>
          <div className="rounded-lg bg-white">
            <CustomBarChart />
          </div>
        </div>
        <div className="px-8 py-4 lg:px-20 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="h-80 w-full py-4 pr-6 mr-4 -pl-16  rounded-lg bg-white lg:col-span-2">
            <CustomLineChart />
          </div>
          <div className="h-full w-full p-4 rounded-lg bg-white">
            <Progress />
          </div>
        </div>
        <div className="px-8 lg:px-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-scroll-y p-2 rounded-lg bg-white">
            <h3 className="text-gray-400 text-xl font-medium p-3">
              Recent Applicants
            </h3>
            <UserList />
          </div>
          <div className="h-72 rounded-lg bg-white">
            <CustomBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
