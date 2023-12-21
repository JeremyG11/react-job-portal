import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from './Widgets/Avatar/Avatar';

const Navigation = () => {
  const [state, setState] = useState(false);

  const navigationLinks = [
    {
      name: 'HOME',
      path: '/',
    },
    {
      name: 'ABOUT',
      path: '/about',
    },
    {
      name: 'EVENTS',
      path: '/events',
    },
    {
      name: 'DASHBOARD',
      path: '/dashboard',
    },
    {
      name: 'BLOGS',
      path: '/blogs',
    },
    {
      name: 'CONTACT',
      path: '/contact',
    },
  ];

  const { userData } = useSelector((state) => state.auth);

  const [stickyClass, setStickyClass] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, [active]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      height > 80
        ? setStickyClass('fixed bg-white shadow text-[#032]')
        : setStickyClass('absolute text-[#ddd]');
      setActive(true);
    }
  };

  return (
    <nav
      className={`${stickyClass}  z-50  transition-all duration-500 border-b w-full static md:text-sm md:border-none ${
        state ? 'bg-white text-gray-700' : 'bg-transparent'
      }`}
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <div className="flex items-center">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/10/Target-Logo-1968-present.png"
              className="w-16"
            />
            <h2 className="font-bold font-comfortaa text-[#f00] text-2xl">
              emplanet
            </h2>
          </div>
          <div className="lg:hidden">
            <button
              className={`${
                active
                  ? 'text-gray-500 hover:text-gray-800'
                  : 'text-white hover:text-gray-300'
              } `}
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 font-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
            state ? 'block px-8 pb-8' : 'hidden'
          }`}
        >
          <ul className="justify-end items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            {navigationLinks.map((link, idx) => {
              return (
                <li key={idx} className="text-sm hover:text-[#ff2e2e] ">
                  <NavLink
                    to={link.path}
                    className={'[&.active]:text-[#ff2e2e] block'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            {userData ? (
              <>
                <div className="px-2 flex items-center">
                  <Avatar />
                </div>
              </>
            ) : (
              <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                <li>
                  <a
                    href="/"
                    className={`block py-3 text-center ${setStickyClass} border rounded-lg md:border-none`}
                  >
                    Log in
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-3 px-4 font-medium text-center text-white bg-[#ff2e2e] uppercase  hover:bg-[#ff2e2e] active: active:shadow-none rounded-lg shadow md:inline"
                  >
                    Sign up
                  </a>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
