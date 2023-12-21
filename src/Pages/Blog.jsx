import React, { useEffect, useState } from 'react';
import bgImage from '../assets/meeting-room.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TbCalendarTime, TbUser, TbReport } from 'react-icons/tb';
import Search from '../Components/Search';
import { useSelector } from 'react-redux';
import { Fade } from '../Utils/Fade.motion';

const Blogs = () => {
  const { blogs, isLoading } = useSelector((state) => state.blogs);

  const [stickyClass, setStickyClass] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickSarbar);
    return () => {
      window.removeEventListener('scroll', stickSarbar);
    };
  }, [active]);

  const stickSarbar = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      height > 80 ? setStickyClass('fixed top-0 ') : setStickyClass('');
      setActive(true);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="relative top-0  bg-slate-100">
      <div
        className="h-96 bg-no-repeat bg-cover bg-top bg-opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      >
        <Fade>
          <h1 className="px-8 lg:pl-20 pt-40 text-3xl lg:text-7xl font-extrabold text-white">
            Blogs{' '}
          </h1>
        </Fade>
      </div>
      <div className="lg:flex lg:px-20 lg:py-10">
        <div className="flex flex-col md:w-3/4">
          {isLoading ? (
            <div className="flex flex-col items-center h-[580px] justify-between py-4 space-y-8 animate-pulse md:space-y-0 md:items-center">
              <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l441 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full py-3 px-0 mx-0">
                <div className="h-4 bg-gray-200 rounded-full w-96 mb-4"></div>
                <div className="flex justify-between w-1/2 ">
                  <div className="h-6 w-24 bg-gray-200 rounded-full mb-3.5"></div>
                  <div className="h-6 w-16 bg-gray-200 rounded-full mb-3.5"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded-full mb-4"></div>
                </div>
                <div className=" pr-10">
                  <div className="h-2 w-full bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-2 w-full bg-gray-200 rounded-full mb-3.5"></div>
                </div>
                <div className="h-5 w-28 bg-gray-200 rounded-full mb-4"></div>
              </div>
            </div>
          ) : (
            blogs?.map((blog) => {
              const date = new Date(blog.posted_at);
              const formattedDate = date.toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <Fade key={blog.id}>
                  <div className=" bg-white pb-5 mb-5 ">
                    <div className="p-6 ">
                      <img
                        src={blog.image}
                        alt=""
                        className=" w-[100%] md:h-96 h-54 "
                      />
                    </div>
                    <div className="px-6">
                      <p className="text-sm md:text-lg font-bold text-gray-600">
                        {blog.title}
                      </p>
                      <div className="py-2 flex items-center">
                        <span className="flex items-center ml-0">
                          <i className="mr-2 text-[#ff0000]">
                            {<TbCalendarTime />}
                          </i>
                          <p className="text-xs md:text-sm text-gray-500">
                            {formattedDate}
                          </p>
                        </span>
                        <span className="flex items-center ml-10">
                          <i className="mr-2 text-[#ff0000] font-bold">
                            {<TbUser />}
                          </i>
                          <p className="text-xs md:text-sm text-gray-500">
                            Admin
                          </p>
                        </span>
                        <span className="flex items-center ml-10">
                          <i className="mr-2 text-[#ff0000]">{<TbReport />}</i>
                          <p className="text-xs md:text-sm text-gray-500">
                            {blog.location}
                          </p>
                        </span>
                      </div>
                      <p className="my-2 h-12 overflow-hidden tranucate line-clamp-2 text-sm md:text-base text-gray-600">
                        {blog.content}
                      </p>
                      <button className="text-xs md:text-sm font-semibold text-gray-700 md:-mt-4">
                        Read more...
                      </button>
                    </div>
                  </div>
                </Fade>
              );
            })
          )}
        </div>
        <div
          className={`${stickyClass} sticky top-0 lg:ml-12 w-96 p-4 min-h-[100px]`}
        >
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

export default Blogs;
