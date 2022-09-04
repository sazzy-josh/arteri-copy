import React, { useState } from "react";
import * as Icon from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import axios from "axios";
import Alert from "../Alert";
import LogOutAlert from "../custom-alerts/LogOutAlert";

const SideMenu = ({
  selectDash,
  selectApplication,
  selectAccount,
  selectNot,
  selectHelp,
  selectHistory,
}) => {
  const navigate = useNavigate();
  const [alertProps, setAlertProps] = useState({
    type: "",
    title: "",
    subtitle: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const logOutUser = async () => {
    let loggedInToken;
    // post formData to server
    try {
      if (localStorage.getItem("authToken")) {
        loggedInToken = localStorage.getItem("authToken");
      } else {
        loggedInToken = sessionStorage.getItem("authToken");
      }
      const response = await axios.post(
        "https://api.arteri.tk/api/account/log-out/here",
        {},
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );

      // client received a success response (2xx)
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");

      navigate("/login", { replace: true });
    } catch (err) {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        setAlertProps((prev) => ({
          ...prev,
          type: "fail",
          title: "Ooops! Sorry",
          subtitle: err.response.data.data.flash_message,
        }));
        setIsModalOpen(true);

        console.log(err.response);
      }
    }
    console.log("log out");
  };
  return (
    <div className="bg-sky-600 h-screen flex flex-col justify-start items-start w-full px-10 overflow-y-auto">
      <div className="w-full mt-20 mb-10">
        <Logo />
      </div>
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="mb-auto w-full">
          <div
            onClick={() => navigate("/dashboard")}
            className={
              selectDash
                ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
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
                ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
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
                ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
            }
          >
            <span className="mr-4 pl-3">
              <Icon.BsFillPersonFill />
            </span>
            <span>My Account</span>
          </div>
          {/* <div className="flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5">
            <span className="mr-4 pl-3">
              <Icon.BsFileEarmarkFontFill />
            </span>
            <span>History</span>
          </div> */}
          <div
            onClick={() => navigate("/history/repayment")}
            className={
              selectHistory
                ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
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
                ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
            }
          >
            <span className="mr-4 pl-3">
              <Icon.BsFillBellFill />
            </span>
            <span>Notifications</span>
          </div>
          <div className="flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5">
            <span className="mr-4 pl-3">
              <Icon.BsGearFill />
            </span>
            <span>Settings</span>
          </div>
          <div
            onClick={() => navigate("/help")}
            className={
              selectHelp
                ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
                : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
            }
          >
            <span className="mr-4 pl-3">
              <Icon.BsFillQuestionSquareFill />
            </span>
            <span>Help</span>
          </div>
        </div>
        <div className="mt-auto mb-20 text-white">
          {/*   <div className="border rounded-md border-white bg-transparent px-5 py-2 cursor-pointer">
            <span>Switch Account</span>
          </div> */}
          <div
            onClick={logOutUser}
            className="flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center border rounded-md border-white bg-transparent px-5 py-2 my-5 cursor-pointer"
          >
            <span className="mr-5">
              <BiLogOut />
            </span>
            <span>Logout</span>
          </div>
        </div>
      </div>
      <Alert
        type={alertProps.type}
        title={alertProps.title}
        subtitle={alertProps.subtitle}
        buttonText={alertProps.buttonText}
        modalTrigger={isModalOpen}
        setModalTrigger={setIsModalOpen}
      />
      <LogOutAlert
        title={"Are ypu sure you want to logout?"}
        modalTrigger={isLogOutModalOpen}
        setModalTrigger={setIsLogOutModalOpen}
      />
    </div>
  );
};

export default SideMenu;
