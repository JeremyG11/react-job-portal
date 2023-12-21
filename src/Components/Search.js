import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  return (
    <form className="flex">
      <input
        type="text"
        className="py-2 px-3 text-gray-500 text-xs md:text-base w-[100%] md:w-[280px]  rounded-tl rounded-bl  outline-none"
        placeholder="Keyword here ..."
      />
      <i className="py-2 px-3 bg-[#ff0000] flex items-center rounded-tr rounded-br  text-white text-lg md:text-2xl font-bold cursor-pointer">
        {<CiSearch />}
      </i>
    </form>
  );
};

export default Search;
