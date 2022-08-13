import React, { useState } from "react";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import SearchIcon from "../../assets/icons/search-icon.svg";
import TrashIcon from "../../assets/icons/trash-icon.svg";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab2");
  return (
    // <p>testing</p>
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
                <section className="my-5 px-5  ">
                  <p className="text-2xl font-bold text-left mb-5">
                    Financing History
                  </p>
                  <div className="flex justify-between items-center mb-8">
                    <p
                      onClick={() => setActiveTab("tab1")}
                      className={`inline-block medium pb-3 w-[100px] text-center   ${
                        activeTab === "tab1" && "border-b-4 border-primary"
                      }`}
                    >
                      Repayment
                    </p>
                    <p
                      onClick={() => setActiveTab("tab2")}
                      className={`inline-block medium pb-3 w-[100px] text-center   ${
                        activeTab === "tab2" && "border-b-4 border-primary"
                      }`}
                    >
                      Loan
                    </p>
                    <p
                      onClick={() => setActiveTab("tab3")}
                      className={`inline-block medium pb-3 w-[100px] text-center   ${
                        activeTab === "tab3" && "border-b-4 border-primary"
                      }`}
                    >
                      BNPL
                    </p>
                  </div>
                  <SearchSort />
                </section>
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default History;
