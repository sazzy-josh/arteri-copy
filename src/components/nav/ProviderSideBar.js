import React, { useState, useContext } from "react";
import * as Icon from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import axios from "axios";
import Alert from "../Alert";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { ModalContext } from "../../contexts/ModalContext";
import LogOutAlert from "../custom-alerts/LogOutAlert";

const ProviderSideMenu = ({
  selectDash,
  selectApplication,
  selectAccount,
  selectNot,
  selectHelp,
  selectHistory,
  selectSettings,
  selectClaims,
}) => {
  // contexts

  const { setIsLogOutModalOpen } = useContext(ModalContext);

  const navigate = useNavigate();

  const [dash, setDash] = useState(true);
  const [tool, setTool] = useState(false);
  const [others, setOthers] = useState(false);
  // const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  return (
    <div className="bg-sky-600 h-screen flex flex-col justify-start items-start w-full px-10 overflow-y-auto">
      <div className="w-full mt-10 mb-8">
        <Logo />
      </div>
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="mb-auto w-full">
          <div className="flex flex-row justify-between items-center text-white cursor-pointer">
            <p
              onClick={() => {
                setDash(true);
                setTool(false);
                setOthers(false);
              }}
              className="text-white font-semibold text-left px-5 whitespace-nowrap"
            >
              Dashboard
            </p>
            {dash ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </div>
          {dash && (
            <div>
              <div
                onClick={() => {
                  setDash(true);
                  setTool(false);
                  setOthers(false);
                  navigate("/provider-dashboard");
                }}
                className={
                  selectDash
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillGridFill />
                </span>
                <span>Overview</span>
              </div>
              <div
                onClick={() => {
                  setDash(true);
                  setTool(false);
                  setOthers(false);
                  navigate("/provider-loan");
                }}
                className={
                  selectApplication
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsWallet />
                </span>
                <span>Apply for loan</span>
              </div>
              <div
                onClick={() => {
                  setDash(true);
                  setTool(false);
                  setOthers(false);
                  navigate("/history/repayment");
                }}
                className={
                  selectHistory
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFileEarmarkFontFill />
                </span>
                <span>Repay Loan</span>
              </div>
              <div
                onClick={() => {
                  setDash(true);
                  setTool(false);
                  setOthers(false);
                  navigate("/provider-claims/received");
                }}
                className={
                  selectClaims
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 10.25H16"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 13.75H14"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>Claims</span>
              </div>
              <div
                onClick={() => {
                  setDash(true);
                  setTool(false);
                  setOthers(false);
                  navigate("/provider-account");
                }}
                className={
                  selectAccount
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillPersonFill />
                </span>
                <span>My Account</span>
              </div>
            </div>
          )}
        </div>
        {/* Second Nav */}
        <div className="mb-auto w-full">
          <div className="flex flex-row justify-between items-center text-white cursor-pointer">
            <p
              onClick={() => {
                setDash(false);
                setTool(true);
                setOthers(false);
              }}
              className="text-white font-semibold text-left px-5 my-5 whitespace-nowrap"
            >
              My Tools
            </p>
            {tool ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </div>
          {tool && (
            <div>
              {/* <div
                onClick={() => navigate("/dashboard")}
                className={
                  selectDash
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillGridFill />
                </span>
                <span>Overview</span>
              </div>
              <div
                onClick={() => navigate("/application")}
                className={
                  selectApplication
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsWallet />
                </span>
                <span>Apply for loan</span>
              </div>
              <div
                onClick={() => navigate("/my-account")}
                className={
                  selectAccount
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillPersonFill />
                </span>
                <span>My Account</span>
              </div>
   
              <div
                onClick={() => navigate("/history/repayment")}
                className={
                  selectHistory
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFileEarmarkFontFill />
                </span>
                <span>History</span>
              </div>
              <div
                onClick={() => navigate("/notifications")}
                className={
                  selectNot
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillBellFill />
                </span>
                <span>Notifications</span>
              </div>
              <div className="flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5">
                <span className="mr-4 pl-3">
                  <Icon.BsGearFill />
                </span>
                <span>Settings</span>
              </div>
              <div
                onClick={() => navigate("/help")}
                className={
                  selectHelp
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillQuestionSquareFill />
                </span>
                <span>Help</span>
              </div> */}
            </div>
          )}
        </div>
        {/* Third Nav */}
        <div className="mb-auto w-full">
          <div className="flex flex-row justify-between items-center text-white cursor-pointer">
            <p
              onClick={() => {
                setDash(false);
                setTool(false);
                setOthers(true);
              }}
              className="text-white font-semibold text-left px-5 whitespace-nowrap"
            >
              Others
            </p>
            {others ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </div>
          {others && (
            <div>
              <div
                onClick={() => {
                  setDash(false);
                  setTool(false);
                  setOthers(true);
                  navigate("/provider-history/repayment");
                }}
                className={
                  selectHistory
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFileEarmarkFontFill />
                </span>
                <span>History</span>
              </div>
              <div
                onClick={() => {
                  setDash(false);
                  setTool(false);
                  setOthers(true);
                  navigate("/provider-notifications");
                }}
                className={
                  selectNot
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillBellFill />
                </span>
                <span>Notifications</span>
              </div>
              <div
                onClick={() => {
                  setDash(false);
                  setTool(false);
                  setOthers(true);
                  navigate("/provider-settings");
                }}
                className={
                  selectSettings
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsGearFill />
                </span>
                <span>Settings</span>
              </div>
              <div
                onClick={() => {
                  setDash(false);
                  setTool(false);
                  setOthers(true);
                  navigate("/provider-help");
                }}
                className={
                  selectHelp
                    ? `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold whitespace-nowrap text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillQuestionSquareFill />
                </span>
                <span>Help</span>
              </div>
            </div>
          )}
        </div>
        <div className="mt-auto mb-20 text-white">
          {/* <div className="border rounded-md border-white bg-transparent px-5 py-2 cursor-pointer">
            <span>Switch Account</span>
          </div> */}
          <div
            onClick={() => setIsLogOutModalOpen(true)}
            className="flex flex-row justify-start items-center border rounded-md border-white bg-transparent px-5 py-2 my-5 cursor-pointer"
          >
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

export default ProviderSideMenu;
