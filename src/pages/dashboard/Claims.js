import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";

// import styles
import "../../styles/history.css";

const Claims = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("tab2");
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex h-screen fixed mr-auto">
          <SideMenu selectClaims={true} />
        </div>
        <div className="lg:w-4/5 w-full ml-auto">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <MobileHeader
                selectClaims={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <>
                <section className="my-5 px-5 flex justify-between items-center">
                  <p className="text-3xl font-bold text-left ">
                    Claims History
                  </p>

                  <button
                    //   onClick={handle}
                    className=" w-40 h-14 border-none outline-none font-medium  text-white  text-center rounded-xl mx-auto text-lg my-3 block  md:mx-auto lg:mx-0 transition duration-200 bg-secondary hover:bg-[#354D19] active:bg-[#354D19] active:border-2 active:border-[#8BC34A]"
                  >
                    New Claim
                  </button>
                </section>

                <Outlet />
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Claims;
