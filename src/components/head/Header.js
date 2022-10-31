import React, { useContext } from "react";
import * as Icon from "react-icons/bs";
import { RiSettings2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Notification } from "../../assets/icons/notification-bell.svg";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import { ReactComponent as SMS } from "../../assets/icons/sms.svg";
import { ReactComponent as Menu } from "../../assets/icons/mobile-hamburger.svg";
import { ModalContext } from "../../contexts/ModalContext";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
import MaleAvatar from "../../assets/images/Arteri_Avatar_Male.jpg";

const Header = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();
  // preloader contexts
  const { setIsContentLoading, setIsAlertOpen, alertProps, setAlertProps } =
    useContext(ModalContext);

  const fetchUserProfile = () => {
    const authToken =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    return Axios.get(`${process.env.REACT_APP_BASE_URI}/user/profile/get`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
  };

  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery(["user-profile-header"], fetchUserProfile, {
    onError: (error) => {
      setAlertProps((prev) => ({
        ...prev,
        type: "fail",
        title: "Ooops! Sorry",
        subtitle: error?.response?.data?.data?.flash_message,
      }));
      setIsAlertOpen(true);
    },
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    // staleTime: Infinity,
  });

  return (
    <div className="mt-5 mb-8 w-full px-4">
      {/* tablet/desktop view  */}
      <div className="hidden w-full md:flex md:gap-4  md:justify-end md:items-center ">
        <div
          onClick={() =>
            navigate(
              localStorage.getItem("accountType") == "provider"
                ? "/provider-help"
                : "/help"
            )
          }
          className=" bg-[#F6FAFD] rounded-full h-10 w-10 cursor-pointer flex  justify-center items-center shadow hover:bg-[#E6F2D9] transition"
        >
          <SMS />
        </div>
        <div
          onClick={() =>
            navigate(
              localStorage.getItem("accountType") == "provider"
                ? "/provider-notifications"
                : "/notifications"
            )
          }
          className=" bg-[#F6FAFD] rounded-full h-10 w-10 cursor-pointer flex  justify-center items-center shadow hover:bg-[#E6F2D9] transition"
        >
          <Notification />
        </div>
        <div className=" bg-[#F6FAFD] rounded-full h-10 w-10 cursor-pointer flex  justify-center items-center shadow hover:bg-[#E6F2D9] transition">
          <Setting />
        </div>

        <div className="h-16 w-16 mx-2 rounded-full flex justify-center items-center cursor-pointer shadow">
          <img
            onClick={() =>
              navigate(
                localStorage.getItem("accountType") == "provider"
                  ? "/provider-account"
                  : "/my-account"
              )
            }
            src={MaleAvatar}
            alt="Avatar"
            className="w-full h-full "
          />
        </div>
      </div>

      {/* mobile view  */}
      <div className="flex justify-between items-center md:hidden">
        <div className="h-12 w-12 mx-2 rounded-full flex justify-center items-center cursor-pointer shadow">
          <img
            onClick={() =>
              navigate(
                localStorage.getItem("accountType") == "provider"
                  ? "/provider-account"
                  : "/my-account"
              )
            }
            src={MaleAvatar}
            alt="Avatar"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-8">
          <div
            onClick={() =>
              navigate(
                localStorage.getItem("accountType") == "provider"
                  ? "/provider-notifications"
                  : "/notifications"
              )
            }
            className=" bg-[#F6FAFD] rounded-full h-10 w-10 cursor-pointer flex  justify-center items-center shadow  hover:bg-[#E6F2D9] transition"
          >
            <Notification />
          </div>
          <Menu
            onClick={() => setIsSidebarOpen(true)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
