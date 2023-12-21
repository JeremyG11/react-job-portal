import React, { useState } from 'react';
import AvatarDropdrown from './AvatarDropdrown';

const Avatar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
      <AvatarDropdrown className="hidden lg:block" />
      <button
        className="outline-none text-gray-400 block lg:hidden"
        onClick={() => setMenuState(!menuState)}
      >
        {menuState ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
export default Avatar;
