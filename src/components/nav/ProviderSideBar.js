import React, { useState, useContext, useEffect } from "react";
import * as Icon from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import axios from "axios";
import Alert from "../Alert";
import { ReactComponent as ArteriLogo } from "../../assets/arteri-logo-white.svg";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { ModalContext } from "../../contexts/ModalContext";
import LogOutAlert from "../custom-alerts/LogOutAlert";

const ProviderSideMenu = ({ isSidebarOpen, selectedSidebarLink }) => {
  // contexts
  // retrives the value of active tab from local storage and assigns it to the ActiveMenu state
  const activeTab = localStorage.getItem("activeTab")
    ? JSON.parse(localStorage.getItem("activeTab"))
    : "dashboard";

  const { setIsLogOutModalOpen } = useContext(ModalContext);
  const [ActiveMenu, setActiveMenu] = useState(activeTab);

  useEffect(() => {
    localStorage.setItem("activeTab", JSON.stringify(ActiveMenu));
  }, [ActiveMenu]);

  let navigate = useNavigate();

  return (
    <div
      className={`bg-primary h-full fixed z-10 w-[245px] px-5 pt-7 overflow-auto duration-500 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="w-full mb-8">
        <ArteriLogo />
      </div>

      {/* Sider Bar Goes Here  */}
      <div className=" pt-1">
        {/* Dashboard Menu items goes here */}
        <div
          className="font-semibold pl-2 my-2 mb-0 h-12 flex items-center justify-between cursor-pointer text-white"
          onClick={() => {
            setActiveMenu("dashboard");
          }}
        >
          <p>Dashboard</p>
          <div className="flex justify-center items-center rounded-full bg-white w-6 h-6">
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition duration-500 ${
                ActiveMenu !== "dashboard" ? "rotate-180" : "rotate-0"
              } `}
            >
              <path
                d="M12.2807 6.03516L7.93404 1.68849C7.4207 1.17516 6.5807 1.17516 6.06737 1.68849L1.7207 6.03516"
                stroke="#3385D7"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Submenu items goes here */}

        {/* <div className={`transition-all duration-700 ease-in-out ${ActiveMenu === "dashboard" ? "h-auto" : "h-0 -translate-y-5 overflow-hidden delay-700"}` }>  */}
        <div
          className={`transition-all overflow-hidden duration-500 ease-in-out ${
            ActiveMenu === "dashboard" ? "max-h-72" : "max-h-0 overflow-hidden "
          }`}
        >
          {/*NavLink for Overview  */}
          <div
            onClick={() => navigate("/provider-dashboard")}
            className={`sidebar-links ${
              selectedSidebarLink === "overview"
                ? " bg-white text-primary"
                : "bg-none text-white hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  selectedSidebarLink === "overview" ? "#3385D7" : "#ffffff"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Overview</span>
          </div>

          {/* Navlink for Apply for loan */}
          <div
            onClick={() => navigate("/provider-loan")}
            className={`sidebar-links ${
              selectedSidebarLink === "application"
                ? " bg-white text-primary"
                : "bg-none text-white hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  selectedSidebarLink === "application" ? "#3385D7" : "#ffffff"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.44141 18.9995L4.43141 19.9895L6.56141 18.0195"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Apply for loan</span>
          </div>

          {/* Navlink for repay loan */}

          <div
            className={`sidebar-links ${
              selectedSidebarLink === "repay"
                ? " bg-white text-primary"
                : "bg-none text-white hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={selectedSidebarLink === "repay" ? "#3385D7" : "#ffffff"}
              >
                <path
                  d="M19.3009 7.91949V13.0695C19.3009 16.1495 17.5409 17.4695 14.9009 17.4695H6.11093C5.66093 17.4695 5.23093 17.4295 4.83093 17.3395C4.58093 17.2995 4.34094 17.2295 4.12094 17.1495C2.62094 16.5895 1.71094 15.2895 1.71094 13.0695V7.91949C1.71094 4.83949 3.47093 3.51953 6.11093 3.51953H14.9009C17.1409 3.51953 18.7509 4.46953 19.1809 6.63953C19.2509 7.03953 19.3009 7.44949 19.3009 7.91949Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M22.302 10.9206V16.0706C22.302 19.1506 20.542 20.4706 17.902 20.4706H9.11203C8.37203 20.4706 7.70204 20.3706 7.12204 20.1506C5.93204 19.7106 5.12203 18.8006 4.83203 17.3406C5.23203 17.4306 5.66203 17.4706 6.11203 17.4706H14.902C17.542 17.4706 19.302 16.1506 19.302 13.0706V7.92059C19.302 7.45059 19.262 7.03062 19.182 6.64062C21.082 7.04063 22.302 8.38059 22.302 10.9206Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M10.4994 13.1394C11.9574 13.1394 13.1394 11.9574 13.1394 10.4994C13.1394 9.04136 11.9574 7.85938 10.4994 7.85938C9.04136 7.85938 7.85938 9.04136 7.85938 10.4994C7.85938 11.9574 9.04136 13.1394 10.4994 13.1394Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M4.78125 8.30078V12.7008"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M16.2227 8.30078V12.7008"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>Repay Loan</span>
          </div>

          {/* Navlink for claims goes here */}
          <div
            onClick={() => {
              navigate("/provider-claims/received");
            }}
            className={`sidebar-links ${
              selectedSidebarLink === "claim"
                ? " bg-white text-primary"
                : "bg-none text-white hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={selectedSidebarLink === "claim" ? "#3385D7" : "#ffffff"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 10.25H16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13.75H14"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Claims</span>
          </div>

          {/*Navlink for my account goes here  */}
          <div
            onClick={() => {
              navigate("/provider-account/profile");
            }}
            className={`sidebar-links ${
              selectedSidebarLink === "account"
                ? " bg-white text-primary"
                : "bg-none text-white hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  selectedSidebarLink === "account" ? "#3385D7" : "#ffffff"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>My Account</span>
          </div>
        </div>

        {/* My tools Menu item goes here */}
        <div
          className="font-semibold pl-2 my-2 h-12 flex items-center justify-between cursor-pointer text-white"
          onClick={() => {
            setActiveMenu("tools");
          }}
        >
          <p>My Tools</p>
          <div className="flex justify-center items-center rounded-full bg-white w-6 h-6">
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition duration-500 ${
                ActiveMenu !== "tools" ? "rotate-180" : "rotate-0"
              } `}
            >
              <path
                d="M12.2807 6.03516L7.93404 1.68849C7.4207 1.17516 6.5807 1.17516 6.06737 1.68849L1.7207 6.03516"
                stroke="#3385D7"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Others menu items goes here */}
        <div
          className="font-semibold pl-2 my-2 h-12 flex items-center justify-between cursor-pointer text-white"
          onClick={() => setActiveMenu("others")}
        >
          <p>Others</p>
          <div className="flex justify-center items-center rounded-full bg-white w-6 h-6">
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition duration-500 ${
                ActiveMenu !== "others" ? "rotate-180" : "rotate-0"
              } `}
            >
              <path
                d="M12.2807 6.03516L7.93404 1.68849C7.4207 1.17516 6.5807 1.17516 6.06737 1.68849L1.7207 6.03516"
                stroke="#3385D7"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Others Sub menu goes here */}
        {/* <div className={`transition-all duration-700 ease-in-out ${ActiveMenu === "others" ? "h-auto" : "h-0 -translate-y-5 overflow-hidden delay-700"}`}>  */}
        <div
          className={`transition-all overflow-hidden duration-500 ease-in-out ${
            ActiveMenu === "others" ? "max-h-80" : "max-h-0 overflow-hidden "
          }`}
        >
          {/* Navlink for activities goes here */}

          <div
            // onClick={() => navigate("/provider-account/profile")}
            className={`sidebar-links ${
              selectedSidebarLink === "activities"
                ? " bg-white text-primary"
                : "bg-none text-white hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={
                  selectedSidebarLink === "activities" ? "#3385D7" : "#ffffff"
                }
              >
                <path
                  d="M12.3691 8.87891H17.6191"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.38086 8.87891L7.13086 9.62891L9.38086 7.37891"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.3691 15.8789H17.6191"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.38086 15.8789L7.13086 16.6289L9.38086 14.3789"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="">Activities</span>
          </div>

          {/*NavLink for History */}

          <div
            onClick={() => navigate("/provider-history/repayment")}
            className={`sidebar-links ${
              selectedSidebarLink === "history"
                ? " bg-white text-primary"
                : "bg-none text-white hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  selectedSidebarLink === "history" ? "#3385D7" : "#ffffff"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 7H16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11H15"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.211 14.7703L14.671 18.3103C14.531 18.4503 14.401 18.7103 14.371 18.9003L14.181 20.2503C14.111 20.7403 14.451 21.0803 14.941 21.0103L16.291 20.8203C16.481 20.7903 16.751 20.6603 16.881 20.5203L20.421 16.9803C21.031 16.3703 21.321 15.6603 20.421 14.7603C19.531 13.8703 18.821 14.1603 18.211 14.7703Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.6992 15.2803C17.9992 16.3603 18.8392 17.2003 19.9192 17.5003"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="">History</span>
          </div>

          {/*Navlink for Notifications goes here */}
          <div
            onClick={() => {
              navigate("/provider-notifications");
            }}
            className={`sidebar-links ${
              selectedSidebarLink === "notification"
                ? "text-primary bg-white"
                : "text-white bg-none hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.63498 7.93962L4.91086 7.74429L4.91086 7.74429L5.63498 7.93962ZM10.0294 3.32187L10.2616 4.03502L10.0294 3.32187ZM5.58024 8.14256L6.30435 8.33789L6.30435 8.33789L5.58024 8.14256ZM5.37443 12.4901L4.6351 12.6162L4.6351 12.6162L5.37443 12.4901ZM5.39835 12.6304L4.65901 12.7565L5.39835 12.6304ZM5.44241 12.8555L5.74148 13.5433C6.07066 13.4002 6.25227 13.0439 6.17468 12.6934L5.44241 12.8555ZM5.91421 17.4155L5.76386 18.1503H5.76386L5.91421 17.4155ZM6.28987 17.4924L6.44022 16.7576H6.44022L6.28987 17.4924ZM17.7101 17.4924L17.5598 16.7576L17.7101 17.4924ZM18.0858 17.4155L18.2361 18.1503L18.0858 17.4155ZM18.5563 12.855L17.8249 12.6889C17.7451 13.0406 17.9268 13.3993 18.2577 13.5429L18.5563 12.855ZM18.6063 12.6035L19.3456 12.7295L19.3456 12.7295L18.6063 12.6035ZM18.6316 12.4548L17.8923 12.3288V12.3288L18.6316 12.4548ZM18.446 8.17266L17.7204 8.3622V8.3622L18.446 8.17266ZM18.3728 7.89241L19.0985 7.70286V7.70286L18.3728 7.89241ZM14.1044 3.32847L14.3405 2.61661L14.3405 2.61661L14.1044 3.32847ZM14.8053 18.6483L14.0725 18.4887L14.8053 18.6483ZM14.7328 18.9811L15.4656 19.1407L14.7328 18.9811ZM9.2672 18.9811L10 18.8216L9.2672 18.9811ZM9.19471 18.6483L8.46189 18.8079L9.19471 18.6483ZM12.885 20.8719L12.7105 20.1424H12.7105L12.885 20.8719ZM12.689 20.9187L12.8635 21.6482H12.8635L12.689 20.9187ZM11.311 20.9187L11.4854 20.1893H11.4854L11.311 20.9187ZM11.115 20.8719L10.9406 21.6013H10.9406L11.115 20.8719ZM10.1656 17.5578C10.4376 17.2455 10.4049 16.7717 10.0926 16.4997C9.78024 16.2276 9.30649 16.2603 9.03444 16.5726L10.1656 17.5578ZM14.9656 16.5726C14.6935 16.2603 14.2198 16.2276 13.9074 16.4997C13.5951 16.7717 13.5624 17.2455 13.8344 17.5578L14.9656 16.5726ZM6.3591 8.13495C6.88057 6.2018 8.36216 4.65345 10.2616 4.03502L9.79717 2.60872C7.41967 3.38281 5.56533 5.31814 4.91086 7.74429L6.3591 8.13495ZM6.30435 8.33789L6.3591 8.13495L4.91086 7.74429L4.85612 7.94722L6.30435 8.33789ZM6.11377 12.3641C5.88534 11.0241 5.95039 9.65007 6.30435 8.33789L4.85612 7.94722C4.44563 9.46896 4.37021 11.0622 4.6351 12.6162L6.11377 12.3641ZM6.13768 12.5044L6.11377 12.3641L4.6351 12.6162L4.65901 12.7565L6.13768 12.5044ZM6.17468 12.6934C6.16087 12.631 6.14852 12.568 6.13768 12.5044L4.65901 12.7565C4.67398 12.8443 4.69104 12.9313 4.71014 13.0176L6.17468 12.6934ZM4.75 15.0614C4.75 14.3809 5.15824 13.7969 5.74148 13.5433L5.14334 12.1677C4.02929 12.6521 3.25 13.7656 3.25 15.0614H4.75ZM6.06457 16.6808C5.30191 16.5247 4.75 15.8495 4.75 15.0614H3.25C3.25 16.5573 4.29863 17.8505 5.76386 18.1503L6.06457 16.6808ZM6.44022 16.7576L6.06457 16.6808L5.76386 18.1503L6.13952 18.2272L6.44022 16.7576ZM17.5598 16.7576C13.8909 17.5084 10.1091 17.5084 6.44022 16.7576L6.13952 18.2272C10.0068 19.0185 13.9932 19.0185 17.8605 18.2272L17.5598 16.7576ZM17.9354 16.6808L17.5598 16.7576L17.8605 18.2272L18.2361 18.1503L17.9354 16.6808ZM19.25 15.0614C19.25 15.8495 18.6981 16.5247 17.9354 16.6808L18.2361 18.1503C19.7014 17.8505 20.75 16.5574 20.75 15.0614H19.25ZM18.2577 13.5429C18.8413 13.7963 19.25 14.3806 19.25 15.0614H20.75C20.75 13.765 19.9699 12.651 18.855 12.167L18.2577 13.5429ZM17.8669 12.4774C17.8548 12.5487 17.8408 12.6192 17.8249 12.6889L19.2877 13.021C19.3095 12.9248 19.3289 12.8276 19.3456 12.7295L17.8669 12.4774ZM17.8923 12.3288L17.8669 12.4774L19.3456 12.7295L19.3709 12.5808L17.8923 12.3288ZM17.7204 8.3622C18.0585 9.65691 18.1172 11.0094 17.8923 12.3288L19.3709 12.5808C19.6316 11.0515 19.5637 9.48391 19.1717 7.98312L17.7204 8.3622ZM17.6472 8.08195L17.7204 8.3622L19.1717 7.98312L19.0985 7.70286L17.6472 8.08195ZM13.8682 4.04032C15.7265 4.65676 17.1496 6.17715 17.6472 8.08195L19.0985 7.70286C18.4731 5.30882 16.6832 3.39375 14.3405 2.61661L13.8682 4.04032ZM10.2616 4.03502C11.4314 3.65414 12.7039 3.65409 13.8682 4.04032L14.3405 2.61661C12.8689 2.12843 11.2681 2.12981 9.79717 2.60872L10.2616 4.03502ZM14.0725 18.4887L14 18.8216L15.4656 19.1407L15.5381 18.8079L14.0725 18.4887ZM10 18.8216L9.92754 18.4887L8.46189 18.8079L8.53437 19.1407L10 18.8216ZM12.7105 20.1424L12.5146 20.1893L12.8635 21.6482L13.0594 21.6013L12.7105 20.1424ZM11.4854 20.1893L11.2895 20.1424L10.9406 21.6013L11.1365 21.6482L11.4854 20.1893ZM9.92754 18.4887C9.8554 18.1574 9.9442 17.8119 10.1656 17.5578L9.03444 16.5726C8.50107 17.185 8.2891 18.0143 8.46189 18.8079L9.92754 18.4887ZM15.5381 18.8079C15.7109 18.0143 15.4989 17.185 14.9656 16.5726L13.8344 17.5578C14.0558 17.8119 14.1446 18.1574 14.0725 18.4887L15.5381 18.8079ZM12.5146 20.1893C12.1762 20.2702 11.8238 20.2702 11.4854 20.1893L11.1365 21.6482C11.7042 21.7839 12.2958 21.7839 12.8635 21.6482L12.5146 20.1893ZM8.53437 19.1407C8.79878 20.355 9.73275 21.3124 10.9406 21.6013L11.2895 20.1424C10.6448 19.9883 10.1425 19.4761 10 18.8216L8.53437 19.1407ZM14 18.8216C13.8575 19.4761 13.3552 19.9883 12.7105 20.1424L13.0594 21.6013C14.2673 21.3124 15.2012 20.355 15.4656 19.1407L14 18.8216Z"
                  fill={
                    selectedSidebarLink === "notification"
                      ? "#3385D7"
                      : "#ffffff"
                  }
                />
              </svg>
            </span>
            <span className="">Notifications</span>
          </div>

          {/* Navlink for Settings goes here */}

          <div
            onClick={() => navigate("/provider-settings")}
            className={`sidebar-links ${
              selectedSidebarLink === "settings"
                ? "text-primary bg-white"
                : "text-white bg-none hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={
                  selectedSidebarLink === "settings" ? "#3385D7" : "#ffffff"
                }
              >
                <path
                  d="M13.7517 4.69329C13.7517 3.85839 13.1416 3.14883 12.3161 3.0238C12.1066 2.99207 11.8935 2.99207 11.6839 3.0238C10.8584 3.14883 10.2482 3.85839 10.2482 4.6933V5.87397C9.77662 6.00858 9.32734 6.19618 8.90726 6.42992L8.07205 5.59471C7.48168 5.00435 6.54849 4.93407 5.87637 5.42937C5.70578 5.55509 5.55509 5.70578 5.42937 5.87637C4.93407 6.54849 5.00434 7.4817 5.59471 8.07207L6.42992 8.90728C6.19617 9.32735 6.00857 9.77663 5.87397 10.2483H4.6933C3.85839 10.2483 3.14883 10.8584 3.0238 11.6839C2.99207 11.8935 2.99207 12.1066 3.0238 12.3161C3.14883 13.1416 3.85839 13.7518 4.69329 13.7518H5.87396C6.00857 14.2234 6.19617 14.6727 6.42992 15.0927L5.59471 15.9279C5.00434 16.5183 4.93407 17.4515 5.42937 18.1236C5.55509 18.2942 5.70578 18.4449 5.87638 18.5706C6.5485 19.0659 7.48169 18.9957 8.07205 18.4053L8.90726 17.5701C9.32734 17.8038 9.77662 17.9914 10.2482 18.126V19.3067C10.2482 20.1416 10.8584 20.8512 11.6839 20.9762C11.8934 21.0079 12.1066 21.0079 12.3161 20.9762C13.1416 20.8512 13.7517 20.1416 13.7517 19.3067V18.1261C14.2234 17.9914 14.6727 17.8038 15.0927 17.5701L15.9279 18.4053C16.5183 18.9957 17.4515 19.0659 18.1236 18.5706C18.2942 18.4449 18.4449 18.2942 18.5706 18.1236C19.0659 17.4515 18.9957 16.5183 18.4053 15.928L17.5701 15.0928C17.8038 14.6727 17.9914 14.2234 18.1261 13.7518H19.3067C20.1416 13.7518 20.8512 13.1416 20.9762 12.3161C21.0079 12.1066 21.0079 11.8935 20.9762 11.6839C20.8512 10.8584 20.1416 10.2483 19.3067 10.2483H18.126C17.9914 9.77662 17.8038 9.32734 17.5701 8.90726L18.4053 8.07205C18.9957 7.48168 19.0659 6.54849 18.5706 5.87637C18.4449 5.70578 18.2942 5.55509 18.1236 5.42937C17.4515 4.93407 16.5183 5.00434 15.9279 5.59471L15.0927 6.42992C14.6727 6.19617 14.2234 6.00857 13.7517 5.87396V4.69329Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <span className="">Settings</span>
          </div>

          {/* Navlink for Help goes here */}

          <div
            onClick={() => navigate("/provider-help")}
            className={`sidebar-links ${
              selectedSidebarLink === "help"
                ? "text-primary bg-white"
                : "text-white bg-none hover:bg-[#7FB3E6]"
            }`}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={selectedSidebarLink === "help" ? "#3385D7" : "#ffffff"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.4302H13L8.54999 21.3902C7.88999 21.8302 7 21.3602 7 20.5602V18.4302C4 18.4302 2 16.4302 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018V13.4302C22 16.4302 20 18.4302 17 18.4302Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9998 11.3599V11.1499C11.9998 10.4699 12.4198 10.1099 12.8398 9.81989C13.2498 9.53989 13.6598 9.1799 13.6598 8.5199C13.6598 7.5999 12.9198 6.85986 11.9998 6.85986C11.0798 6.85986 10.3398 7.5999 10.3398 8.5199"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 13.75H12.0045"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="">Help</span>
          </div>
        </div>

        {/* //!History goes here */}
        {/* <div
          onClick={() => navigate("/provider-history/repayment")}
          className={`sidebar-links ${
            selectedSidebarLink === "history"
              ? " bg-white text-primary"
              : "bg-none text-white hover:bg-[#7FB3E6]"
          }`}
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={selectedSidebarLink === "history" ? "#3385D7" : "#ffffff"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 7H16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11H15"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.211 14.7703L14.671 18.3103C14.531 18.4503 14.401 18.7103 14.371 18.9003L14.181 20.2503C14.111 20.7403 14.451 21.0803 14.941 21.0103L16.291 20.8203C16.481 20.7903 16.751 20.6603 16.881 20.5203L20.421 16.9803C21.031 16.3703 21.321 15.6603 20.421 14.7603C19.531 13.8703 18.821 14.1603 18.211 14.7703Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.6992 15.2803C17.9992 16.3603 18.8392 17.2003 19.9192 17.5003"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="">History</span>
        </div> */}

        {/* //! Claims goes here  */}

        {/* <div
          onClick={() => navigate("/provider-claims/received")}
          className={`sidebar-links ${
            selectedSidebarLink === "claim"
              ? " bg-white text-primary"
              : "bg-none text-white hover:bg-[#7FB3E6]"
          }`}
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={selectedSidebarLink === "claim" ? "#3385D7" : "#ffffff"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10.25H16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 13.75H14"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="">Claims</span>
        </div> */}

        {/* //!Notification goes here */}

        {/* <div
          onClick={() => navigate("/provider-notifications")}
          className={`sidebar-links ${
            selectedSidebarLink === "notification"
              ? "text-primary bg-white"
              : "text-white bg-none hover:bg-[#7FB3E6]"
          }`}
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.63498 7.93962L4.91086 7.74429L4.91086 7.74429L5.63498 7.93962ZM10.0294 3.32187L10.2616 4.03502L10.0294 3.32187ZM5.58024 8.14256L6.30435 8.33789L6.30435 8.33789L5.58024 8.14256ZM5.37443 12.4901L4.6351 12.6162L4.6351 12.6162L5.37443 12.4901ZM5.39835 12.6304L4.65901 12.7565L5.39835 12.6304ZM5.44241 12.8555L5.74148 13.5433C6.07066 13.4002 6.25227 13.0439 6.17468 12.6934L5.44241 12.8555ZM5.91421 17.4155L5.76386 18.1503H5.76386L5.91421 17.4155ZM6.28987 17.4924L6.44022 16.7576H6.44022L6.28987 17.4924ZM17.7101 17.4924L17.5598 16.7576L17.7101 17.4924ZM18.0858 17.4155L18.2361 18.1503L18.0858 17.4155ZM18.5563 12.855L17.8249 12.6889C17.7451 13.0406 17.9268 13.3993 18.2577 13.5429L18.5563 12.855ZM18.6063 12.6035L19.3456 12.7295L19.3456 12.7295L18.6063 12.6035ZM18.6316 12.4548L17.8923 12.3288V12.3288L18.6316 12.4548ZM18.446 8.17266L17.7204 8.3622V8.3622L18.446 8.17266ZM18.3728 7.89241L19.0985 7.70286V7.70286L18.3728 7.89241ZM14.1044 3.32847L14.3405 2.61661L14.3405 2.61661L14.1044 3.32847ZM14.8053 18.6483L14.0725 18.4887L14.8053 18.6483ZM14.7328 18.9811L15.4656 19.1407L14.7328 18.9811ZM9.2672 18.9811L10 18.8216L9.2672 18.9811ZM9.19471 18.6483L8.46189 18.8079L9.19471 18.6483ZM12.885 20.8719L12.7105 20.1424H12.7105L12.885 20.8719ZM12.689 20.9187L12.8635 21.6482H12.8635L12.689 20.9187ZM11.311 20.9187L11.4854 20.1893H11.4854L11.311 20.9187ZM11.115 20.8719L10.9406 21.6013H10.9406L11.115 20.8719ZM10.1656 17.5578C10.4376 17.2455 10.4049 16.7717 10.0926 16.4997C9.78024 16.2276 9.30649 16.2603 9.03444 16.5726L10.1656 17.5578ZM14.9656 16.5726C14.6935 16.2603 14.2198 16.2276 13.9074 16.4997C13.5951 16.7717 13.5624 17.2455 13.8344 17.5578L14.9656 16.5726ZM6.3591 8.13495C6.88057 6.2018 8.36216 4.65345 10.2616 4.03502L9.79717 2.60872C7.41967 3.38281 5.56533 5.31814 4.91086 7.74429L6.3591 8.13495ZM6.30435 8.33789L6.3591 8.13495L4.91086 7.74429L4.85612 7.94722L6.30435 8.33789ZM6.11377 12.3641C5.88534 11.0241 5.95039 9.65007 6.30435 8.33789L4.85612 7.94722C4.44563 9.46896 4.37021 11.0622 4.6351 12.6162L6.11377 12.3641ZM6.13768 12.5044L6.11377 12.3641L4.6351 12.6162L4.65901 12.7565L6.13768 12.5044ZM6.17468 12.6934C6.16087 12.631 6.14852 12.568 6.13768 12.5044L4.65901 12.7565C4.67398 12.8443 4.69104 12.9313 4.71014 13.0176L6.17468 12.6934ZM4.75 15.0614C4.75 14.3809 5.15824 13.7969 5.74148 13.5433L5.14334 12.1677C4.02929 12.6521 3.25 13.7656 3.25 15.0614H4.75ZM6.06457 16.6808C5.30191 16.5247 4.75 15.8495 4.75 15.0614H3.25C3.25 16.5573 4.29863 17.8505 5.76386 18.1503L6.06457 16.6808ZM6.44022 16.7576L6.06457 16.6808L5.76386 18.1503L6.13952 18.2272L6.44022 16.7576ZM17.5598 16.7576C13.8909 17.5084 10.1091 17.5084 6.44022 16.7576L6.13952 18.2272C10.0068 19.0185 13.9932 19.0185 17.8605 18.2272L17.5598 16.7576ZM17.9354 16.6808L17.5598 16.7576L17.8605 18.2272L18.2361 18.1503L17.9354 16.6808ZM19.25 15.0614C19.25 15.8495 18.6981 16.5247 17.9354 16.6808L18.2361 18.1503C19.7014 17.8505 20.75 16.5574 20.75 15.0614H19.25ZM18.2577 13.5429C18.8413 13.7963 19.25 14.3806 19.25 15.0614H20.75C20.75 13.765 19.9699 12.651 18.855 12.167L18.2577 13.5429ZM17.8669 12.4774C17.8548 12.5487 17.8408 12.6192 17.8249 12.6889L19.2877 13.021C19.3095 12.9248 19.3289 12.8276 19.3456 12.7295L17.8669 12.4774ZM17.8923 12.3288L17.8669 12.4774L19.3456 12.7295L19.3709 12.5808L17.8923 12.3288ZM17.7204 8.3622C18.0585 9.65691 18.1172 11.0094 17.8923 12.3288L19.3709 12.5808C19.6316 11.0515 19.5637 9.48391 19.1717 7.98312L17.7204 8.3622ZM17.6472 8.08195L17.7204 8.3622L19.1717 7.98312L19.0985 7.70286L17.6472 8.08195ZM13.8682 4.04032C15.7265 4.65676 17.1496 6.17715 17.6472 8.08195L19.0985 7.70286C18.4731 5.30882 16.6832 3.39375 14.3405 2.61661L13.8682 4.04032ZM10.2616 4.03502C11.4314 3.65414 12.7039 3.65409 13.8682 4.04032L14.3405 2.61661C12.8689 2.12843 11.2681 2.12981 9.79717 2.60872L10.2616 4.03502ZM14.0725 18.4887L14 18.8216L15.4656 19.1407L15.5381 18.8079L14.0725 18.4887ZM10 18.8216L9.92754 18.4887L8.46189 18.8079L8.53437 19.1407L10 18.8216ZM12.7105 20.1424L12.5146 20.1893L12.8635 21.6482L13.0594 21.6013L12.7105 20.1424ZM11.4854 20.1893L11.2895 20.1424L10.9406 21.6013L11.1365 21.6482L11.4854 20.1893ZM9.92754 18.4887C9.8554 18.1574 9.9442 17.8119 10.1656 17.5578L9.03444 16.5726C8.50107 17.185 8.2891 18.0143 8.46189 18.8079L9.92754 18.4887ZM15.5381 18.8079C15.7109 18.0143 15.4989 17.185 14.9656 16.5726L13.8344 17.5578C14.0558 17.8119 14.1446 18.1574 14.0725 18.4887L15.5381 18.8079ZM12.5146 20.1893C12.1762 20.2702 11.8238 20.2702 11.4854 20.1893L11.1365 21.6482C11.7042 21.7839 12.2958 21.7839 12.8635 21.6482L12.5146 20.1893ZM8.53437 19.1407C8.79878 20.355 9.73275 21.3124 10.9406 21.6013L11.2895 20.1424C10.6448 19.9883 10.1425 19.4761 10 18.8216L8.53437 19.1407ZM14 18.8216C13.8575 19.4761 13.3552 19.9883 12.7105 20.1424L13.0594 21.6013C14.2673 21.3124 15.2012 20.355 15.4656 19.1407L14 18.8216Z"
                fill={
                  selectedSidebarLink === "notification" ? "#3385D7" : "#ffffff"
                }
              />
            </svg>
          </span>
          <span className="">Notifications</span>
        </div> */}

        {/* //!Help goes here  */}
        {/* <div
          onClick={() => navigate("/provider-help")}
          className={`sidebar-links ${
            selectedSidebarLink === "help"
              ? "text-primary bg-white"
              : "text-white bg-none hover:bg-[#7FB3E6]"
          }`}
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={selectedSidebarLink === "help" ? "#3385D7" : "#ffffff"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 18.4302H13L8.54999 21.3902C7.88999 21.8302 7 21.3602 7 20.5602V18.4302C4 18.4302 2 16.4302 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018V13.4302C22 16.4302 20 18.4302 17 18.4302Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9998 11.3599V11.1499C11.9998 10.4699 12.4198 10.1099 12.8398 9.81989C13.2498 9.53989 13.6598 9.1799 13.6598 8.5199C13.6598 7.5999 12.9198 6.85986 11.9998 6.85986C11.0798 6.85986 10.3398 7.5999 10.3398 8.5199"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 13.75H12.0045"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="">Help</span>
        </div> */}

        <div className="mt-auto mb-20 text-white">
          <div
            onClick={() => setIsLogOutModalOpen(true)}
            className="font-semibold rounded-lg px-5 mt-10 h-12 border-2 border-white flex justify-between items-center gap-4  transition duration-150 cursor-pointer hover:bg-[#7FB3E6]"
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402"
                  stroke="#F6FAFD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0001 12H3.62012"
                  stroke="#F6FAFD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
                  stroke="#F6FAFD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderSideMenu;
