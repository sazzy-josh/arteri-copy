import React from "react";
import SearchIcon from "../../assets/icons/search-icon.svg";

const SearchSort = () => {
  return (
    <div className="md:flex justify-end items-center gap-6 mb-5 md:pr-5">
      <div className="relative  w-full  h-12 border-2 border-gray-300 rounded-lg p-1 md:w-80">
        <input
          type="text"
          name="search"
          className=" w-full h-full border-none outline-none bg-transparent pl-3 pr-12"
          placeholder="Search"
        />
        <img
          src={SearchIcon}
          className="absolute top-1/2 right-5 -translate-y-1/2 "
        />
      </div>
      <div className="mt-6 flex justify-between items-center md:mt-0">
        <p className=" border-2 px-4 py-2 rounded-lg h-12 border-gray-300 flex justify-betwwen items-center gap-2 cursor-pointer">
          <svg
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
              stroke="#808080"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Sort by</span>
        </p>
        {/* <div className="bg-[#EAF2FB] w-10 h-10 rounded-full flex justify-center items-center">
            <img src={TrashIcon} className=" " />
          </div> */}
      </div>
    </div>
  );
};

export default SearchSort;
