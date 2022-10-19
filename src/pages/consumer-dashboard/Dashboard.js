import React, { useState } from "react";
import LargeCard from "../../components/cards/LargeCard";
import SmallCard from "../../components/cards/SmallCard";
import Chart from "../../components/chart/HalfPie";
import FinancialSummary from "../../components/dashboard/FinancialSummary";

import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ConsumerDashboardWrapper selectedSidebarLink={"dashboard"}>
      <div className="w-full px-5 lg:px-0 md:px-0 flex flex-col justify-start items-start">
        <p className="hidden md:block font-semibold text-left text-2xl text-black mt-2 mb-10">
          Consumer Health Financing Dashboard
        </p>
        <div className="w-full flex lg:flex-row md:flex-col flex-col justify-start items-start">
          <div className="my-5 block md:hidden">
            <p className="font-semibold text-left text-2xl text-[#333333] my-2">
              Consumer Financing Summary
            </p>
            <p className="font-medium text-left text-lg text-[#808080] my-4">
              Application ID: 6377388
            </p>
            <div className="w-full my-10">
              <div className="my-2">
                <SmallCard classNames="bg-[#FEF4E7]  w-full h-36">
                  <p className="text-2xl font-semibold text-[#F29C2B]">
                    250000000000
                  </p>
                  <p className="text-lg font-medium text-[#808080]">
                    Loan amount
                  </p>
                </SmallCard>
              </div>
              <div className="my-2">
                <SmallCard classNames="bg-[#E5FFEF]  w-full h-36">
                  <p className="text-2xl font-semibold text-[#00A03E]">
                    10,000
                  </p>
                  <p className="text-lg font-medium text-[#808080]">
                    Already repaid
                  </p>
                </SmallCard>
              </div>
              <div className="my-2">
                <SmallCard classNames="bg-[#FEEDE6]  w-full h-36">
                  <p className="text-2xl font-semibold text-[#FF0000]">
                    15,000
                  </p>
                  <p className="text-lg font-medium text-[#808080]">
                    Reamaing to be repaid
                  </p>
                </SmallCard>
              </div>
            </div>
            <div className="w-full">
              <div>
                <p className="font-semibold text-left text-2xl text-[#333333] my-2">
                  Financing Tracker
                </p>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <Chart />
                <div>
                  <ul className="flex flex-row justify-start items-center text-base font-medium">
                    <li className="w-2 h-2 rounded-full bg-[#D65DB1]"></li>
                    <li className="mx-2">Days</li>
                    <li className="w-2 h-2 rounded-full bg-[#F29C2B]"></li>
                    <li className="mx-2">Hours</li>
                    <li className="w-2 h-2 rounded-full bg-[#FFC75F]"></li>
                    <li className="mx-2">Days</li>
                    <li className="w-2 h-2 rounded-full bg-[#FF0000]"></li>
                    <li className="mx-2">Hours</li>
                  </ul>
                  <p className="font-semibold my-3 text-3xl">
                    <span className="text-[#D65DB1]">25:</span>
                    <span className="text-[#F29C2B]">06:</span>
                    <span className="text-[#FFC75F]">21:</span>
                    <span className="text-[#FF0000]">23</span>
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center my-4">
                <div className="rounded-lg shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                  <h3 className="text-primary font-medium text-sm mb-1">
                    Collected Date
                  </h3>
                  <p className="text-[#333333] text-base font-medium">
                    10 June, 2022
                  </p>
                </div>
                <div className="rounded-lg shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                  <h3 className="text-primary font-medium text-sm mb-1">
                    Payment Date
                  </h3>
                  <p className="text-[#333333] text-base font-medium">
                    10 Aug, 2022
                  </p>
                </div>
                <div className="rounded-lg shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                  <h3 className="text-primary font-medium text-sm mb-1">
                    Financing Period
                  </h3>
                  <p className="text-[#333333] text-base font-medium">
                    10 Months
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block md:block lg:w-3/4">
            <LargeCard>
              <div className="w-full">
                <div className="w-full flex flex-row justify-start items-start">
                  <p className="dashboard-title ">Financing Summary</p>
                  <p className="font-bold text-xl text-gray-400">
                    Application ID: 6377388
                  </p>
                </div>
                <div className="w-full my-5 flex flex-row justify-start items-start">
                  <div className="mt-5 mr-10 w-1/3">
                    <SmallCard classNames="bg-orange-50 text-orange-600 w-full">
                      <p className="text-4xl">2000</p>
                    </SmallCard>

                    <p className="text-base">Loan Amount</p>
                  </div>
                  <div className="mt-5 mr-10 w-1/3">
                    <SmallCard classNames="bg-green-50 text-green-600 w-full">
                      <p className="text-4xl">10000</p>
                    </SmallCard>

                    <p className="text-base">Already repaid</p>
                  </div>
                  <div className="mt-5 w-1/3 flex flex-col justify-center items-center">
                    <SmallCard classNames="bg-red-50 text-red-600 w-full">
                      <p className="text-4xl">2000</p>
                    </SmallCard>

                    <p className="text-base text-center w-32">
                      Remaining to be repaid
                    </p>
                  </div>
                </div>
              </div>
            </LargeCard>
            <div className="my-5">
              <LargeCard>
                <div className="">
                  <div>
                    <h2 className="font-bold text-left">Financing Tracker</h2>
                  </div>
                  <div className="w-full flex flex-row justify-start items-start">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                      <Chart />
                      <div>
                        <ul className="flex flex-row justify-start items-center">
                          <li className="mr-2">Days</li>
                          <li className="mr-2">Hours</li>
                          <li className="mr-2">Days</li>
                          <li className="mr-2">Hours</li>
                        </ul>
                        <p className="font-bold text-3xl">
                          <span className="text-purple-500">25:</span>
                          <span className="text-orange-500">06:</span>
                          <span className="text-orange-300">21:</span>
                          <span className="text-red-500">23</span>
                        </p>
                      </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                      <div className="rounded-md bg-gray-300 my-2 py-2 px-1 text-center w-40">
                        <h3 className="text-sky-600">Collected Date</h3>
                        <p>23/05/2022</p>
                      </div>
                      <div className="rounded-md bg-gray-300 my-2 py-2 px-1 text-center w-40">
                        <h3 className="text-sky-600">Collected Date</h3>
                        <p>23/05/2022</p>
                      </div>
                      <div className="rounded-md bg-gray-300 my-2 py-2 px-1 text-center w-40">
                        <h3 className="text-sky-600">Financing Period</h3>
                        <p>10 Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </LargeCard>
            </div>
          </div>
          <div className="hidden lg:block md:block lg:w-1/4 md:w-full">
            <div className="w-full">
              <LargeCard classNames="w-full">
                <div className="my-3">
                  <p className="text-xl text-left font-bold">
                    Financing History
                  </p>
                </div>
                <div className="w-full my-10">
                  <div className="bg-gray-50 text-sm px-5 py-3 rounded-md flex flex-row justify-between items-center my-2">
                    <span>ID: 6533766</span>
                    <span>22/10/2022</span>
                  </div>
                  <div className="bg-gray-50 text-sm px-5 py-3 rounded-md flex flex-row justify-between items-center my-2">
                    <span>ID: 6533766</span>
                    <span>22/10/2022</span>
                  </div>
                  <div className="bg-gray-50 text-sm px-5 py-3 rounded-md flex flex-row justify-between items-center my-2">
                    <span>ID: 6533766</span>
                    <span>22/10/2022</span>
                  </div>
                  <div className="bg-gray-50 text-sm px-5 py-3 rounded-md flex flex-row justify-between items-center my-2">
                    <span>ID: 6533766</span>
                    <span>22/10/2022</span>
                  </div>
                  <div className="bg-gray-50 text-sm px-5 py-3 rounded-md flex flex-row justify-between items-center my-2">
                    <span>ID: 6533766</span>
                    <span>22/10/2022</span>
                  </div>
                  <div className="bg-gray-50 text-sm px-5 py-3 rounded-md flex flex-row justify-between items-center my-2">
                    <span>ID: 6533766</span>
                    <span>22/10/2022</span>
                  </div>
                  <div className="bg-gray-50 text-sm px-5 py-3 rounded-md flex flex-row justify-between items-center my-2">
                    <span>ID: 6533766</span>
                    <span>22/10/2022</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-white mt-20">
                  <div className="px-5 py-2 bg-green-600 rounded-md">
                    <span>See all history</span>
                  </div>
                </div>
              </LargeCard>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="px-5">
        <h1 className="dashboard-title hidden md:block">
          Consumer Health Financing Dashboard
        </h1>
        <h1 className=" font-semibold text-left text-2xl text-[#333333] mb-4 md:hidden">
          Consumer Finanancing Summary
        </h1>
        <div>
          <FinancialSummary />
        </div>
      </section> */}
    </ConsumerDashboardWrapper>
  );
};

export default Dashboard;
