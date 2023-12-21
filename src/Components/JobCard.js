import React from 'react';
import { MdLocationPin, MdWorkOutline } from 'react-icons/md';
import { formatDistanceToNow } from 'date-fns';

const JobCard = ({ jobs }) => {
  return (
    <>
      {jobs.map((job) => {
        const distance = formatDistanceToNow(new Date(job?.posted_at), {
          addSuffix: true,
        });
        return (
          <div
            key={job?.id}
            className="w-96 h-64 bg-white rounded shadow-lg p-5"
          >
            <div className="flex mt-4">
              <span className="rounded-full shadow-md w-11 h-11 bg-red-500 text-white flex items-center justify-center">
                <MdWorkOutline />
              </span>
              <div className="flex flex-col justify-between ml-4 ">
                <h2 className="font-medium">{job?.title}</h2>
                <div className="pr-10 flex justify-between py-2">
                  <h2 className="text-xs text-[#726b6b] font-medium ">
                    {job?.employer?.name}
                  </h2>
                  <p className="text-[11px] text-[#726b6b] font-medium ">
                    {distance}
                  </p>
                </div>
              </div>
            </div>
            <p className="leading-5 h-24 line-clamp-5  overflow-hidden text-sm py-2 mb-5">
              {job?.description}
            </p>
            <div className="flex items-center justify-between ">
              <button className=" border-[1px] rounded hover:bg-red-500 hover:text-white border-red-500 text-xs px-3 py-2 text-red-500">
                Apply Now
              </button>
              <span className="flex items-center">
                <MdLocationPin className="text-2xl text-red-500" />
                <p className="text-xs mx-1 font-medium text-[#726b6b]">
                  {job?.location}
                </p>
              </span>
              <span className="flex items-center">
                <MdWorkOutline className="text-2xl text-red-500" />
                <p className="text-xs mx-1 font-medium text-[#726b6b]">
                  {job?.job_type}
                </p>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JobCard;
