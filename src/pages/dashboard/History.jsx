import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";

// import styles
import "../../styles/history.css";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("tab2");
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex h-screen fixed mr-auto">
          <SideMenu selectHistory={true} />
        </div>
        <div className="lg:w-4/5 w-full ml-auto">
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
                  <div className="flex justify-between items-center md:justify-start mb-8 border-b border-gray-100">
                    <NavLink to="/history/repayment" className="history-tab">
                      Repayment
                    </NavLink>
                    <NavLink to="/history/loans" className="history-tab">
                      Loan
                    </NavLink>
                    <NavLink to="/history/bnpl" className="history-tab">
                      BNPL
                    </NavLink>
                  </div>
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
