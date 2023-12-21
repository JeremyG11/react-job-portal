import React, { useEffect } from 'react';
import bgImage from '../assets/meeting-room.jpg';
import Search from '../Components/Search';
import JobCard from '../Components/JobCard';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { useGetAllJobsQuery } from '../Slices/jobApiSlice';
import { fetchJobs } from '../Actions/jobs';
import { useDispatch } from 'react-redux';

const Jobs = () => {
  const { data, error, isLoading } = useGetAllJobsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
    console.log(data);
    console.log(error);
  }, [isLoading, data, error, dispatch]);

  if (isLoading) {
    return <>isLoading....</>;
  }
  return (
    <div className="bg-[#f7f7f7] ">
      <div
        className="h-96 bg-no-repeat bg-cover bg-top bg-opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      >
        <h1 className="px-8 lg:pl-20 pt-40 text-3xl lg:text-7xl font-extrabold text-white">
          Jobs{' '}
        </h1>
      </div>

      <div className="px-20 py-10 flex font-">
        <div>
          <h1 className="py-5 text-3xl text-center font-semibold">
            Latest jobs
          </h1>
          <div className="py-5">
            <button className="border-[1px] rounded-full border-red-500 text-xs px-6 py-2 font-medium text-red-500">
              Popular jobs
            </button>
            <button className="ml-8  border-[1px] rounded-full bg-white px-6 p-2 text-xs font-medium ">
              Recent jobs
            </button>
          </div>
          <div className="py-10 grid grid-cols-2 bg-red-700 gap-10 w-full max-w-3xl min-w-full">
            <JobCard jobs={data || []} />
          </div>
          <div className="flex justify-center">
            <button className="p-1 flex items-center border-[1px] rounded-full bg-red-500 text-xs font-medium text-white">
              <p className="px-3">View all jobs</p>
              <span className="bg-white rounded-full p-1">
                <BsArrowRightShort className=" text-lg font-light text-red-500 " />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white w-96 ml-10 p-5 ">
          <Search />
          <p className='mt-4 font-bold text-gray-500  text-base font-[Poppins, sans-serif] before:content-[" "] before:bg-[#ff0000] before:w-[80px] before:h-0.5 before:mt-8 before:absolute'>
            Recent posts
          </p>
          <div className="py-5">
            <div className="py-1 flex">
              <i className="text-2xl">{<MdKeyboardArrowRight />}</i>
              <p className="px-3 break-words text-base font-medium text-gray-700 hover:text-[#ff0000] ease-out duration-300 cursor-pointer">
                How Can Managers Beat &apos;Productivity Paranoia&apos;?
              </p>
            </div>
          </div>
          <p className='mt-4 font-bold text-gray-500  text-base font-[Poppins, sans-serif] before:content-[" "] before:bg-[#ff0000] before:w-[80px] before:h-0.5 before:mt-8 before:absolute'>
            Categories
          </p>
          <div className="py-5">
            <div className="py-1 flex">
              <i className="text-2xl">{<MdKeyboardArrowRight />}</i>
              <p
                className="px-3 break-words text-base font-medium
                         text-gray-700 hover:text-[#ff0000] ease-out duration-300 cursor-pointer"
              >
                Engineering
              </p>
            </div>
            <div className="py-1 flex">
              <i className="text-2xl">{<MdKeyboardArrowRight />}</i>
              <p
                className="px-3 break-words text-base font-medium
                         text-gray-700 hover:text-[#ff0000] ease-out duration-300 cursor-pointer"
              >
                Commerical jobs
              </p>
            </div>
            <div className="py-1 flex">
              <i className="text-2xl">{<MdKeyboardArrowRight />}</i>
              <p
                className="px-3 break-words text-base font-medium
                         text-gray-700 hover:text-[#ff0000] ease-out duration-300 cursor-pointer"
              >
                Humanitarian jobs
              </p>
            </div>
            <div className="py-1 flex">
              <i className="text-2xl">{<MdKeyboardArrowRight />}</i>
              <p
                className="px-3 break-words text-base font-medium
                         text-gray-700 hover:text-[#ff0000] ease-out duration-300 cursor-pointer"
              >
                Health jobs
              </p>
            </div>
            <p
              className='mt-4 font-bold text-gray-500  text-base 
                            font-[Poppins, sans-serif] before:content-[" "] before:bg-[#ff0000]
                            before:w-[80px] before:h-0.5 before:mt-8 before:absolute'
            >
              Popular Tags
            </p>
            <div className="p-5 flex flex-col-4 flex-wrap gap-2 ">
              <p className="py-0.5 px-2 cursor-pointer rounded  bg-white text-base font-medium text-gray-500 text-center">
                job
              </p>
              <p className="py-0.5 px-2 cursor-pointer rounded  bg-white text-base font-medium text-gray-500 text-center">
                salary
              </p>
              <p className="py-0.5 px-2 cursor-pointer rounded  bg-white text-base font-medium text-gray-500 text-center">
                resumes
              </p>
              <p className="py-0.5 px-2 cursor-pointer rounded  bg-white text-base font-medium text-gray-500 text-center">
                intervier
              </p>
              <p className="py-0.5 px-2 cursor-pointer rounded  bg-white text-base font-medium text-gray-500 text-center">
                satisfaction
              </p>
              <p className="py-0.5 px-2 cursor-pointer rounded  bg-white text-base font-medium text-gray-500 text-center">
                application
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
