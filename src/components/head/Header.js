import React from "react";
import * as Icon from "react-icons/bs";
import { RiSettings2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Notification } from "../../assets/icons/notification-bell.svg";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import { ReactComponent as SMS } from "../../assets/icons/sms.svg";
import { ReactComponent as Menu } from "../../assets/icons/mobile-hamburger.svg";

const Header = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="my-5 w-full px-6 ">
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
            src="https://res.cloudinary.com/vtu-tech-solutions/image/upload/v1658069397/isedowo/Ellipse_40_ptkvzp.svg"
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
            src="https://res.cloudinary.com/vtu-tech-solutions/image/upload/v1658069397/isedowo/Ellipse_40_ptkvzp.svg"
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
