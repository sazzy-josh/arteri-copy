import React, { useState } from "react";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import SearchIcon from "../../assets/icons/search-icon.svg";
import TrashIcon from "../../assets/icons/trash-icon.svg";

// data for table
import Data from "../../utils/FinancialHistoryData";
import HistoryTable from "../../components/HistoryTable";

const SearchSort = () => {
  return (
    <div className="md:flex justify-end items-center gap-6 mb-5">
      <div className="relative  w-full  h-12 border-2 border-gray-300 rounded-lg p-1 md:w-80">
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
      <div className="mt-6 flex justify-between items-center md:mt-0">
        <p className=" border-2 px-4 py-2 rounded-lg h-12 border-gray-300 flex justify-betwwen items-center gap-2">
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
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Sort by</span>
        </p>
        {/* <div className="bg-[#EAF2FB] w-10 h-10 rounded-full flex justify-center items-center">
          <img src={TrashIcon} className=" " />
        </div> */}
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
                  <p className="text-2xl font-bold text-left mb-8">
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
                </section>
                <section className=" px-3 py-5 shadow-2xl shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0">
                  <SearchSort />
                  <table className="w-full ">
                    <thead className="">
                      <tr className="mb-5 border-b-2 border-gray-100">
                        <th className="py-3 px-3 whitespace-nowrap font-semibold">
                          Application
                        </th>
                        <th className="py-3 px-3  whitespace-nowrap font-semibold hidden lg:table-cell">
                          Collection Date and Time
                        </th>
                        <th className="py-3 px-3 whitespace-nowrap font-semibold hidden lg:table-cell">
                          Due Date and Time
                        </th>
                        <th className="py-3 px-3 w-48 whitespace-nowrap font-semibold hidden lg:table-cell">
                          Amount
                        </th>
                        <th className="py-3 px-3  whitespace-nowrap font-semibold ">
                          Status
                        </th>
                        {/* <th className="py-3 px-3 w-16 whitespace-nowrap hidden lg:table-cell "></th> */}
                      </tr>
                      <tr className="bg-red-300 h-5"></tr>
                    </thead>
                    <tbody>
                      {Data.map((item, index) => (
                        <HistoryTable
                          key={index}
                          application_id={item.application_id}
                          collection_date={item.collection_date}
                          due_date={item.due_date}
                          amount={item.amount}
                          status={item.status}
                        />
                      ))}
                    </tbody>
                  </table>
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
