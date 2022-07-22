import React from "react";
import * as Icon from "react-icons/bs";
import { RiSettings2Line } from "react-icons/ri";

const     Header = () => {
  return (
    <div className="my-3 w-full">
      <div className="flex flex-row justify-start items-center w-full">
        <div className="mr-auto w-2/3">
          <div className="">
            <div className="w-full border rounded-md bg-white flex flex-row flex-1 justify-start items-center h-10 px-5">
              <input
                className="w-full h-full outline-none px-2"
                type="text"
                placeholder="Search for anything"
              />
              <Icon.BsSearch />
            </div>
          </div>
        </div>
        <div className="w-1/3 ml-auto flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center w-full">
            <div className=" bg-gray-300 p-1 rounded-full h-6 w-6 flex flex-col justify-center items-center mr-2">
              <Icon.BsEnvelope />
            </div>
            <div className=" bg-gray-300 p-1 rounded-full h-6 w-6 flex flex-col justify-center items-center mr-2">
              <Icon.BsBell />
            </div>
            <div className=" bg-gray-300 p-1 rounded-full h-6 w-6 flex flex-col justify-center items-center mr-2">
              <RiSettings2Line />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center ml-5 pr-2">
              <img
                src="https://res.cloudinary.com/vtu-tech-solutions/image/upload/v1658069397/isedowo/Ellipse_40_ptkvzp.svg"
                height="44px"
                width="44px"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
