import React, { useState } from "react";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import SearchIcon from "../../assets/icons/search-icon.svg";
import TrashIcon from "../../assets/icons/trash-icon.svg";

const SearchSort = () => {
  return (
    <div className="lg:flex justify-between items-center">
      <div className="relative flex-1 w-full  h-12 border-2 border-gray-300 rounded-lg p-1">
        <input
          type="text"
          name="search"
          className=" w-full h-full border-none outline-none bg-transparent pl-3 pr-12"
          placeholder="Search"
        />
        <img
          src={SearchIcon}
          className="absolute top-1/2 right-5 -translate-y-1/2 "
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className=" border-2 px-4 py-3 rounded-md border-gray-300 flex justify-betwwen items-center gap-2">
          <svg
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
              stroke="#808080"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Sort by</p>
        </p>
        <div className="bg-[#EAF2FB] w-10 h-10 leading-10 text-center rounded-full">
          <img src={TrashIcon} className=" text-center" />
        </div>
      </div>
    </div>
  );
};

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
