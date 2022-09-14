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
      <div className="w-full mt-20 mb-10">
        <Logo />
      </div>
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="mb-auto w-full">
          <div className="flex flex-row justify-between items-center text-white cursor-pointer">
            <p
              onClick={() => {
                setDash(!dash);
                setTool(false);
                setOthers(false);
              }}
              className="text-white font-semibold text-left px-5"
            >
              Dashboard
            </p>
            {dash ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </div>
          {dash && (
            <div>
              <div
                onClick={() => navigate("/provider-dashboard")}
                className={
                  selectDash
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
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
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsWallet />
                </span>
                <span>Apply for loan</span>
              </div>
              <div
                onClick={() => navigate("/history/repayment")}
                className={
                  selectHistory
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFileEarmarkFontFill />
                </span>
                <span>Repay Loan</span>
              </div>
              <div
                onClick={() => navigate("/provider-account")}
                className={
                  selectAccount
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
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
                setTool(!tool);
                setOthers(false);
              }}
              className="text-white font-semibold text-left px-5"
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
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
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
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
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
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
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
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
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
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
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
              <div
                onClick={() => navigate("/help")}
                className={
                  selectHelp
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
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
                setOthers(!others);
              }}
              className="text-white font-semibold text-left px-5"
            >
              Others
            </p>
            {others ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </div>
          {others && (
            <div>
              <div
                onClick={() => navigate("/provider-history/repayment")}
                className={
                  selectHistory
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFileEarmarkFontFill />
                </span>
                <span>History</span>
              </div>
              <div
                onClick={() => navigate("/provider-notifications")}
                className={
                  selectNot
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsFillBellFill />
                </span>
                <span>Notifications</span>
              </div>
              <div
                onClick={() => navigate("/provider-settings")}
                className={
                  selectSettings
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
                }
              >
                <span className="mr-4 pl-3">
                  <Icon.BsGearFill />
                </span>
                <span>Settings</span>
              </div>
              <div
                onClick={() => navigate("/provider-help")}
                className={
                  selectHelp
                    ? `flex flex-row justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                    : `flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 px-5 hover:py-2 hover:rounded-md my-5`
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
