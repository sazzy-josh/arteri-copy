import React from "react";
import * as Icon from "react-icons/bs";
import { RiSettings2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Notification } from "../../assets/icons/notification-bell.svg";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import { ReactComponent as SMS } from "../../assets/icons/sms.svg";
import { ReactComponent as Menu } from "../../assets/icons/mobile-hamburger.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="my-3 w-full px-6 ">
      {/* tablet/desktop view  */}
      <div className="hidden  w-full md:flex md:gap-4  md:justify-end md:items-center ">
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
            onClick={() => console.log("open menu")}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
    // <div className="my-3 w-full">
    //   <div className="flex flex-row justify-start items-center w-full">
    //     <div className="mr-auto w-2/3">
    //       <div className="w-full">
    //         <div className="w-full border rounded-md bg-white flex flex-row flex-1 justify-start items-center h-12 px-5">
    //           <input
    //             className="form-input focus:appearance-none w-full h-full border-0 focus:outline-0 outline-none px-2"
    //             type="text"
    //             placeholder="Search for anything"
    //           />
    //           <Icon.BsSearch />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-1/3 ml-auto flex flex-row justify-end items-center">
    //       <div className="flex flex-row justify-end items-center w-full">
    //         <div
    //           onClick={() =>
    //             navigate(
    //               localStorage.getItem("accountType") == "provider"
    //                 ? "/provider-notifications"
    //                 : "/notifications"
    //             )
    //           }
    //           className=" bg-gray-200 p-2 rounded-full h-8 w-8 cursor-pointer flex flex-col justify-center items-center mr-2"
    //         >
    //           <Icon.BsEnvelope />
    //         </div>
    //         <div
    //           onClick={() =>
    //             navigate(
    //               localStorage.getItem("accountType") == "provider"
    //                 ? "/provider-notifications"
    //                 : "/notifications"
    //             )
    //           }
    //           className=" bg-gray-200 p-2 rounded-full h-8 w-8 cursor-pointer flex flex-col justify-center items-center mr-2"
    //         >
    //           <Icon.BsBell />
    //         </div>
    //         <div className=" bg-gray-200 p-2 rounded-full h-8 w-8 cursor-pointer flex flex-col justify-center items-center mr-2">
    //           <RiSettings2Line />
    //         </div>
    //       </div>
    //       <div>
    //         <div className="flex flex-col justify-center cursor-pointer items-center ml-5 pr-2">
    //           <img
    //             onClick={() =>
    //               navigate(
    //                 localStorage.getItem("accountType") == "provider"
    //                   ? "/provider-account"
    //                   : "/my-account"
    //               )
    //             }
    //             src="https://res.cloudinary.com/vtu-tech-solutions/image/upload/v1658069397/isedowo/Ellipse_40_ptkvzp.svg"
    //             height="44px"
    //             width="44px"
    //             alt="Avatar"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
