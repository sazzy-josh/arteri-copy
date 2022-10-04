import React from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import SideMenu from "../nav/SideBar";
import ProviderSideMenu from "../nav/ProviderSideBar";
import { useNavigate } from "react-router-dom";

const ProviderMobileHeader = ({ open, setOpen, selectDash }) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-full mr-auto">
          {open ? (
            <div className="w-full transition-all ease-in-out duration-300">
              <ProviderSideMenu selectDash={selectDash} />
            </div>
          ) : (
            <div className="flex flex-col justify-start cursor-pointer items-start py-5 pl-5">
              <img
                onClick={() =>
                  navigate(
                    localStorage.getItem("accountType") == "provider"
                      ? "/provider-account"
                      : "/my-account"
                  )
                }
                src="https://res.cloudinary.com/vtu-tech-solutions/image/upload/v1658069397/isedowo/Ellipse_40_ptkvzp.svg"
                height="44px"
                width="44px"
                alt="Avatar"
              />
            </div>
          )}
        </div>
        <div className="w-full ml-auto flex flex-row justify-end items-end cursor-pointer">
          <div
            className="flex flex-row justify-center items-center"
            onClick={setOpen}
          >
            <div
              onClick={() =>
                navigate(
                  localStorage.getItem("accountType") == "provider"
                    ? "/provider-notifications"
                    : "/notifications"
                )
              }
              className=" bg-gray-200 p-2 rounded-full h-8 w-8 cursor-pointer flex flex-col justify-center items-center my-5 "
            >
              <BsEnvelope />
            </div>
            {open ? (
              <div className="p-2 rounded-md bg-sky-600 h-8 w-8 m-5 mr-5 text-white">
                <FiX />
              </div>
            ) : (
              <div className="p-2 rounded-md bg-sky-600 h-8 w-8 m-5 mr-5 text-white">
                <FiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderMobileHeader;
