import React from "react";
import * as Icon from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

const SideMenu = ({ selectDash, selectApplication, selectAccount }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-sky-600 h-screen flex flex-col justify-start items-start w-full px-10">
      <div className="w-full mt-20 mb-10">
        <Logo />
      </div>
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="mb-auto w-full">
          <div
            onClick={() => navigate("/dashboard")}
            className={
              selectDash
                ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
            }
          >
            <span className="mr-4 pl-3">
              <Icon.BsFillGridFill />
            </span>
            <span>Dashboard</span>
          </div>
          <div
            onClick={() => navigate("/application")}
            className={
              selectApplication
                ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
            }
          >
            <span className="mr-4 pl-3">
              <Icon.BsWallet />
            </span>
            <span>Apply for loan</span>
          </div>
          <div  onClick={() => navigate("/my-account")} className={
              selectAccount
                ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
            }>
            <span className="mr-4 pl-3">
              <Icon.BsFillPersonFill />
            </span>
            <span>My Account</span>
          </div>
          <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5">
            <span className="mr-4 pl-3">
              <Icon.BsFileEarmarkFontFill />
            </span>
            <span>History</span>
          </div>
          <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5">
            <span className="mr-4 pl-3">
              <Icon.BsFillBellFill />
            </span>
            <span>Notifications</span>
          </div>
          <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5">
            <span className="mr-4 pl-3">
              <Icon.BsGearFill />
            </span>
            <span>Settings</span>
          </div>
          <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5">
            <span className="mr-4 pl-3">
              <Icon.BsFillQuestionSquareFill />
            </span>
            <span>Help</span>
          </div>
        </div>
        <div className="mt-auto mb-20 text-white">
          <div className="border rounded-md border-white bg-transparent px-5 py-2 cursor-pointer">
            <span>Switch Account</span>
          </div>
          <div className="flex flex-row justify-start items-center border rounded-md border-white bg-transparent px-5 py-2 my-5 cursor-pointer">
            <span className="mr-5">
              <BiLogOut />
            </span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
