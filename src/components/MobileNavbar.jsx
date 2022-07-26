import React from "react";
import BlueLogo from "../assets/logo-blue.svg";
import menu from "../assets/icons/menu.svg";

const MobileNavbar = () => {
  return (
    <nav className="flex justify-between w-full p-5 mb-2 md:hidden ">
      <img src={BlueLogo} alt="" />
      <div className="p-2 bg-primary rounded-md">
        <img src={menu} alt="" />
      </div>
    </nav>
  );
};

export default MobileNavbar;
