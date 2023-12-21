import React, { useEffect } from 'react';
import woman from '../assets/woman.png';
import bgImage from '../assets/meeting-room.jpg';
import { CgTime } from 'react-icons/cg';
import { TbCalendarTime, TbMap } from 'react-icons/tb';
import { fetchEvents } from '../Actions/events';
import { useDispatch, useSelector } from 'react-redux';
import { Fade } from '../Utils/Fade.motion';

const Events = () => {
  const { events } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, [events, dispatch]);

  return (
    <div className="relative bg-gray-100">
      <div
        className="h-96 bg-no-repeat bg-cover bg-top bg-opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      >
        <Fade>
          <h1 className="px-8 lg:pl-20 pt-40 text-3xl lg:text-7xl font-extrabold text-white">
            Events
          </h1>
        </Fade>
      </div>
      <div className=" m-10 grid gap-8 grid-cols-3  pb-10">
        {events?.map((indx, event) => {
          const date = new Date(event.date);
          const formattedDate = date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
          return (
            <Fade key={indx}>
              <div className="bg-white w-full shadow rounded-base">
                <div className="relative  blog">
                  <img src={woman} alt="" className=" w-[100%] h-64 " />
                  <p
                    className="absolute top-10 left-10 bg-[#ff0000] px-2 
                            py-1 text-white text-sm rounded"
                  >
                    Web development
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-base font-bold text-gray-600">
                    {event.title}
                  </p>
                  <div className="p-2 flex justify-between items-center">
                    <span className="flex items-center ml-0">
                      <i className="mr-2 text-[#ff0000]">{<TbMap />}</i>
                      <p className="text-sm text-gray-500">{event.address}</p>
                    </span>

                    <span className="flex items-center ml-10">
                      <i className="mr-2 text-[#ff0000]">{<CgTime />}</i>
                      <p className="text-sm text-gray-500">
                        11:00 AM - 2:30 PM
                      </p>
                    </span>
                  </div>
                  <p className="my-2 text-sm border-gray-500 text-gray-600">
                    Recruiting has a long reputation in world of Technology.
                  </p>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <i className="mr-2 text-[#ff0000]">
                        {<TbCalendarTime />}
                      </i>
                      <p className="text-sm text-gray-500">{formattedDate}</p>
                    </span>
                    <button className="text-sm font-medium text-white bg-[#ff0000] p-2 rounded">
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Events;

<div
  role="status"
  className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
>
  <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 ">
    <svg
      className="w-10 h-10 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l241 4a1 1 0 0 1 .028 1.011Z" />
    </svg>
  </div>
  <div className="w-full">
    <div className="h-3 bg-gray-100 rounded-full  w-48 mb-4"></div>
    <div className="h-3 bg-gray-100 rounded-full  max-w-[480px] mb-2"></div>
    <div className="h-3 bg-gray-100 rounded-full  mb-2"></div>
    <div className="h-3 bg-gray-100 rounded-full  max-w-[440px] mb-2"></div>
    <div className="h-3 bg-gray-100 rounded-full  max-w-[460px] mb-2"></div>
    <div className="h-3 bg-gray-100 rounded-full  max-w-[360px]"></div>
  </div>
  <span className="sr-only">Loading...</span>
</div>;
