import React from "react";
import Logo from "../assets/logo-white.svg";
import menu from "../assets/icons/menu.svg";

const MobileNavbar = () => {
  return (
    <nav className="flex justify-between w-full p-5 mb-5 md:hidden ">
      <img src={Logo} alt="" />
      <div className="p-2 bg-primary rounded-md">
        <img src={menu} alt="" />
      </div>
    </nav>
  );
};

export default MobileNavbar;
