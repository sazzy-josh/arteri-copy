import React, { useState, useContext } from "react";
import * as Icon from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// import Logo from "../Logo";
import { ReactComponent as ArteriLogo } from "../../assets/arteri-logo-white.svg";
import { ModalContext } from "../../contexts/ModalContext";
import "../../styles/sidebar.css";

const SideMenu = ({
  selectDash,
  selectApplication,
  selectAccount,
  selectNot,
  selectHelp,
  selectHistory,
  selectClaims,
}) => {
  // contexts
  const { setIsLogOutModalOpen } = useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <div className="bg-primary h-screen w-64 px-5">
      <div className="w-full my-8">
        <ArteriLogo />
      </div>
      <div className=" pt-1">
        <div onClick={() => navigate("/dashboard")} className="sidebar-links">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className=" text-white">Dashboard</span>
        </div>
        <div onClick={() => navigate("/application")} className="sidebar-links">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.44141 18.9995L4.43141 19.9895L6.56141 18.0195"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-white">Apply for loan</span>
        </div>
        <div onClick={() => navigate("/my-account")} className="sidebar-links">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-white">My Account</span>
        </div>

        <div
          onClick={() => navigate("/history/loans")}
          className="sidebar-links"
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
                d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 7H16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 11H15"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.211 14.7703L14.671 18.3103C14.531 18.4503 14.401 18.7103 14.371 18.9003L14.181 20.2503C14.111 20.7403 14.451 21.0803 14.941 21.0103L16.291 20.8203C16.481 20.7903 16.751 20.6603 16.881 20.5203L20.421 16.9803C21.031 16.3703 21.321 15.6603 20.421 14.7603C19.531 13.8703 18.821 14.1603 18.211 14.7703Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.6992 15.2803C17.9992 16.3603 18.8392 17.2003 19.9192 17.5003"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-white">History</span>
        </div>
        <div
          onClick={() => navigate("/consumer-claims/received")}
          className="sidebar-links"
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
          <span className="text-white">Claims</span>
        </div>
        <div
          onClick={() => navigate("/notifications")}
          className="sidebar-links"
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
                fill="white"
              />
            </svg>
          </span>
          <span className="text-white">Notifications</span>
        </div>
        <div onClick={() => navigate("/help")} className="sidebar-links">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 18.4302H13L8.54999 21.3902C7.88999 21.8302 7 21.3602 7 20.5602V18.4302C4 18.4302 2 16.4302 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018V13.4302C22 16.4302 20 18.4302 17 18.4302Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9998 11.3599V11.1499C11.9998 10.4699 12.4198 10.1099 12.8398 9.81989C13.2498 9.53989 13.6598 9.1799 13.6598 8.5199C13.6598 7.5999 12.9198 6.85986 11.9998 6.85986C11.0798 6.85986 10.3398 7.5999 10.3398 8.5199"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9955 13.75H12.0045"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-white">Help</span>
        </div>
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
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0001 12H3.62012"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-primary h-screen flex flex-col justify-start items-start w-full px-5 overflow-y-auto">
    //   <div className="w-full mt-10 mb-8">
    //     <ArteriLogo />
    //   </div>
    //   <div className="flex flex-col justify-between items-center h-screen">
    //     <div className="mb-auto w-full">
    //       <div
    //         onClick={() => navigate("/dashboard")}
    //         className={
    //           selectDash
    //             ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
    //             : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
    //         }
    //       >
    //         <span className="mr-4 pl-3">
    //           {selectDash ? (
    //             <svg
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //           )}
    //         </span>
    //         <span>Dashboard</span>
    //       </div>
    //       <div
    //         onClick={() => navigate("/application")}
    //         className={
    //           selectApplication
    //             ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
    //             : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
    //         }
    //       >
    //         <span className="mr-4 pl-3">
    //           {selectApplication ? (
    //             <svg
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-miterlimit="10"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M3.44141 18.9995L4.43141 19.9895L6.56141 18.0195"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
    //                 stroke="#3385D7"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-miterlimit="10"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M3.44141 18.9995L4.43141 19.9895L6.56141 18.0195"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
    //                 stroke="white"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //           )}
    //         </span>
    //         <span>Apply for loan</span>
    //       </div>
    //       <div
    //         onClick={() => navigate("/my-account")}
    //         className={
    //           selectAccount
    //             ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
    //             : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
    //         }
    //       >
    //         <span className="mr-4 pl-3">
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //         </span>
    //         <span>My Account</span>
    //       </div>

    //       <div
    //         onClick={() => navigate("/history/loans")}
    //         className={
    //           selectHistory
    //             ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
    //             : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
    //         }
    //       >
    //         <span className="mr-4 pl-3">
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M8 7H16"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M9 11H15"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M18.211 14.7703L14.671 18.3103C14.531 18.4503 14.401 18.7103 14.371 18.9003L14.181 20.2503C14.111 20.7403 14.451 21.0803 14.941 21.0103L16.291 20.8203C16.481 20.7903 16.751 20.6603 16.881 20.5203L20.421 16.9803C21.031 16.3703 21.321 15.6603 20.421 14.7603C19.531 13.8703 18.821 14.1603 18.211 14.7703Z"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-miterlimit="10"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M17.6992 15.2803C17.9992 16.3603 18.8392 17.2003 19.9192 17.5003"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-miterlimit="10"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //         </span>
    //         <span>History</span>
    //       </div>
    //       <div
    //         onClick={() => navigate("/consumer-claims/received")}
    //         className={
    //           selectClaims
    //             ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
    //             : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
    //         }
    //       >
    //         <span className="mr-4 pl-3">
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M8 10.25H16"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M8 13.75H14"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //         </span>
    //         <span>Claims</span>
    //       </div>
    //       <div
    //         onClick={() => navigate("/notifications")}
    //         className={
    //           selectNot
    //             ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
    //             : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
    //         }
    //       >
    //         <span className="mr-4 pl-3">
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M5.63498 7.93962L4.91086 7.74429L4.91086 7.74429L5.63498 7.93962ZM10.0294 3.32187L10.2616 4.03502L10.0294 3.32187ZM5.58024 8.14256L6.30435 8.33789L6.30435 8.33789L5.58024 8.14256ZM5.37443 12.4901L4.6351 12.6162L4.6351 12.6162L5.37443 12.4901ZM5.39835 12.6304L4.65901 12.7565L5.39835 12.6304ZM5.44241 12.8555L5.74148 13.5433C6.07066 13.4002 6.25227 13.0439 6.17468 12.6934L5.44241 12.8555ZM5.91421 17.4155L5.76386 18.1503H5.76386L5.91421 17.4155ZM6.28987 17.4924L6.44022 16.7576H6.44022L6.28987 17.4924ZM17.7101 17.4924L17.5598 16.7576L17.7101 17.4924ZM18.0858 17.4155L18.2361 18.1503L18.0858 17.4155ZM18.5563 12.855L17.8249 12.6889C17.7451 13.0406 17.9268 13.3993 18.2577 13.5429L18.5563 12.855ZM18.6063 12.6035L19.3456 12.7295L19.3456 12.7295L18.6063 12.6035ZM18.6316 12.4548L17.8923 12.3288V12.3288L18.6316 12.4548ZM18.446 8.17266L17.7204 8.3622V8.3622L18.446 8.17266ZM18.3728 7.89241L19.0985 7.70286V7.70286L18.3728 7.89241ZM14.1044 3.32847L14.3405 2.61661L14.3405 2.61661L14.1044 3.32847ZM14.8053 18.6483L14.0725 18.4887L14.8053 18.6483ZM14.7328 18.9811L15.4656 19.1407L14.7328 18.9811ZM9.2672 18.9811L10 18.8216L9.2672 18.9811ZM9.19471 18.6483L8.46189 18.8079L9.19471 18.6483ZM12.885 20.8719L12.7105 20.1424H12.7105L12.885 20.8719ZM12.689 20.9187L12.8635 21.6482H12.8635L12.689 20.9187ZM11.311 20.9187L11.4854 20.1893H11.4854L11.311 20.9187ZM11.115 20.8719L10.9406 21.6013H10.9406L11.115 20.8719ZM10.1656 17.5578C10.4376 17.2455 10.4049 16.7717 10.0926 16.4997C9.78024 16.2276 9.30649 16.2603 9.03444 16.5726L10.1656 17.5578ZM14.9656 16.5726C14.6935 16.2603 14.2198 16.2276 13.9074 16.4997C13.5951 16.7717 13.5624 17.2455 13.8344 17.5578L14.9656 16.5726ZM6.3591 8.13495C6.88057 6.2018 8.36216 4.65345 10.2616 4.03502L9.79717 2.60872C7.41967 3.38281 5.56533 5.31814 4.91086 7.74429L6.3591 8.13495ZM6.30435 8.33789L6.3591 8.13495L4.91086 7.74429L4.85612 7.94722L6.30435 8.33789ZM6.11377 12.3641C5.88534 11.0241 5.95039 9.65007 6.30435 8.33789L4.85612 7.94722C4.44563 9.46896 4.37021 11.0622 4.6351 12.6162L6.11377 12.3641ZM6.13768 12.5044L6.11377 12.3641L4.6351 12.6162L4.65901 12.7565L6.13768 12.5044ZM6.17468 12.6934C6.16087 12.631 6.14852 12.568 6.13768 12.5044L4.65901 12.7565C4.67398 12.8443 4.69104 12.9313 4.71014 13.0176L6.17468 12.6934ZM4.75 15.0614C4.75 14.3809 5.15824 13.7969 5.74148 13.5433L5.14334 12.1677C4.02929 12.6521 3.25 13.7656 3.25 15.0614H4.75ZM6.06457 16.6808C5.30191 16.5247 4.75 15.8495 4.75 15.0614H3.25C3.25 16.5573 4.29863 17.8505 5.76386 18.1503L6.06457 16.6808ZM6.44022 16.7576L6.06457 16.6808L5.76386 18.1503L6.13952 18.2272L6.44022 16.7576ZM17.5598 16.7576C13.8909 17.5084 10.1091 17.5084 6.44022 16.7576L6.13952 18.2272C10.0068 19.0185 13.9932 19.0185 17.8605 18.2272L17.5598 16.7576ZM17.9354 16.6808L17.5598 16.7576L17.8605 18.2272L18.2361 18.1503L17.9354 16.6808ZM19.25 15.0614C19.25 15.8495 18.6981 16.5247 17.9354 16.6808L18.2361 18.1503C19.7014 17.8505 20.75 16.5574 20.75 15.0614H19.25ZM18.2577 13.5429C18.8413 13.7963 19.25 14.3806 19.25 15.0614H20.75C20.75 13.765 19.9699 12.651 18.855 12.167L18.2577 13.5429ZM17.8669 12.4774C17.8548 12.5487 17.8408 12.6192 17.8249 12.6889L19.2877 13.021C19.3095 12.9248 19.3289 12.8276 19.3456 12.7295L17.8669 12.4774ZM17.8923 12.3288L17.8669 12.4774L19.3456 12.7295L19.3709 12.5808L17.8923 12.3288ZM17.7204 8.3622C18.0585 9.65691 18.1172 11.0094 17.8923 12.3288L19.3709 12.5808C19.6316 11.0515 19.5637 9.48391 19.1717 7.98312L17.7204 8.3622ZM17.6472 8.08195L17.7204 8.3622L19.1717 7.98312L19.0985 7.70286L17.6472 8.08195ZM13.8682 4.04032C15.7265 4.65676 17.1496 6.17715 17.6472 8.08195L19.0985 7.70286C18.4731 5.30882 16.6832 3.39375 14.3405 2.61661L13.8682 4.04032ZM10.2616 4.03502C11.4314 3.65414 12.7039 3.65409 13.8682 4.04032L14.3405 2.61661C12.8689 2.12843 11.2681 2.12981 9.79717 2.60872L10.2616 4.03502ZM14.0725 18.4887L14 18.8216L15.4656 19.1407L15.5381 18.8079L14.0725 18.4887ZM10 18.8216L9.92754 18.4887L8.46189 18.8079L8.53437 19.1407L10 18.8216ZM12.7105 20.1424L12.5146 20.1893L12.8635 21.6482L13.0594 21.6013L12.7105 20.1424ZM11.4854 20.1893L11.2895 20.1424L10.9406 21.6013L11.1365 21.6482L11.4854 20.1893ZM9.92754 18.4887C9.8554 18.1574 9.9442 17.8119 10.1656 17.5578L9.03444 16.5726C8.50107 17.185 8.2891 18.0143 8.46189 18.8079L9.92754 18.4887ZM15.5381 18.8079C15.7109 18.0143 15.4989 17.185 14.9656 16.5726L13.8344 17.5578C14.0558 17.8119 14.1446 18.1574 14.0725 18.4887L15.5381 18.8079ZM12.5146 20.1893C12.1762 20.2702 11.8238 20.2702 11.4854 20.1893L11.1365 21.6482C11.7042 21.7839 12.2958 21.7839 12.8635 21.6482L12.5146 20.1893ZM8.53437 19.1407C8.79878 20.355 9.73275 21.3124 10.9406 21.6013L11.2895 20.1424C10.6448 19.9883 10.1425 19.4761 10 18.8216L8.53437 19.1407ZM14 18.8216C13.8575 19.4761 13.3552 19.9883 12.7105 20.1424L13.0594 21.6013C14.2673 21.3124 15.2012 20.355 15.4656 19.1407L14 18.8216Z"
    //               fill="white"
    //             />
    //           </svg>
    //         </span>
    //         <span>Notifications</span>
    //       </div>
    //       <div
    //         onClick={() => navigate("/help")}
    //         className={
    //           selectHelp
    //             ? `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-sky-600 cursor-pointer hover:transition-all ease-in-out bg-white px-0 py-2 rounded-md my-5`
    //             : `flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-0 lg:px-5 px-2 hover:py-2 hover:rounded-md my-5`
    //         }
    //       >
    //         <span className="mr-4 pl-3">
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M17 18.4302H13L8.54999 21.3902C7.88999 21.8302 7 21.3602 7 20.5602V18.4302C4 18.4302 2 16.4302 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018V13.4302C22 16.4302 20 18.4302 17 18.4302Z"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-miterlimit="10"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M11.9998 11.3599V11.1499C11.9998 10.4699 12.4198 10.1099 12.8398 9.81989C13.2498 9.53989 13.6598 9.1799 13.6598 8.5199C13.6598 7.5999 12.9198 6.85986 11.9998 6.85986C11.0798 6.85986 10.3398 7.5999 10.3398 8.5199"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M11.9955 13.75H12.0045"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //         </span>
    //         <span>Help</span>
    //       </div>
    //     </div>
    //     <div className="mt-auto mb-20 text-white">
    //       <div
    //         onClick={() => setIsLogOutModalOpen(true)}
    //         className="flex flex-row whitespace-nowrap lg:text-base text-sm justify-start items-center border rounded-md border-white bg-transparent px-5 py-2 my-5 cursor-pointer"
    //       >
    //         <span className="mr-5">
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M15.0001 12H3.62012"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
    //               stroke="white"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //         </span>
    //         <span>Logout</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SideMenu;
