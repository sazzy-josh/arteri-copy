import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
// import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";
import SideMenu from "../../components/nav/SideBar";

// import styles
import "../../styles/history.css";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("tab2");
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex">
          <SideMenu selectHistory={true} />
        </div>
        <div className="lg:w-4/5 w-full">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <MobileHeader
                selectHistory={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <>
                <section className="my-5 px-5">
                  <p className="text-2xl font-bold text-left mb-10">
                    Financing History
                  </p>
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

export default History;
