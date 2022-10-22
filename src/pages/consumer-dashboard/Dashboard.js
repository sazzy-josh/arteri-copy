import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import LargeCard from "../../components/cards/LargeCard";
import SmallCard from "../../components/cards/SmallCard";
import Chart from "../../components/chart/HalfPie";
import FinancialSummary from "../../components/dashboard/FinancialSummary";

import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

const Dashboard = () => {
  let navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const historyList = [
    { id: "232732323", date: "22, Jun, 2022" },
    { id: "767232323", date: "22, Jun, 2022" },
    { id: "645432323", date: "22, Jun, 2022" },
    { id: "554432323", date: "22, Jun, 2022" },
    { id: "12432323", date: "22, Jun, 2022" },
  ];
  const SingleHistory = ({ id, date }) => {
    return (
      <div className="bg-[#FAFAFA] text-sm px-5 py-3 rounded-md flex  justify-between items-center my-2 hover:bg-[#E6F2D9] cursor-pointer transition duration-100">
        <span>ID: {id}</span>
        <span>{date}</span>
      </div>
    );
  };

  return (
    <ConsumerDashboardWrapper selectedSidebarLink={"dashboard"}>
      <div className="w-full px-5 lg:px-0 md:px-0 flex flex-col justify-start items-start">
        <p className="dashboard-title md:block hidden ">
          Consumer Health Financing Dashboard
        </p>
        <div className="w-full flex lg:flex-row md:flex-col flex-col justify-center items-start">
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
                    {/* 25,000 */} 0
                  </p>
                  <p className="text-lg font-medium text-[#808080]">
                    Loan amount
                  </p>
                </SmallCard>
              </div>
              <div className="my-2">
                <SmallCard classNames="bg-[#E5FFEF]  w-full h-36">
                  <p className="text-2xl font-semibold text-[#00A03E]">
                    {/* 10,000 */} 0
                  </p>
                  <p className="text-lg font-medium text-[#808080]">
                    Already repaid
                  </p>
                </SmallCard>
              </div>
              <div className="my-2">
                <SmallCard classNames="bg-[#FEEDE6]  w-full h-36">
                  <p className="text-2xl font-semibold text-[#FF0000]">
                    {/* 15,000 */} 0
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
                    <li
                      className={`w-2 h-2 rounded-full ${
                        false ? "bg-[#D65DB1]" : "bg-[#333333]"
                      }`}
                    ></li>
                    <li className="mx-2">Days</li>
                    <li
                      className={`w-2 h-2 rounded-full ${
                        false ? "bg-[#F29C2B]" : "bg-[#333333]"
                      }`}
                    ></li>
                    <li className="mx-2">Hours</li>
                    <li
                      className={`w-2 h-2 rounded-full ${
                        false ? "bg-[#FFC75F]" : "bg-[#333333]"
                      }`}
                    ></li>
                    <li className="mx-2">Days</li>
                    <li
                      className={`w-2 h-2 rounded-full ${
                        false ? "bg-[#FF0000]" : "bg-[#333333]"
                      }`}
                    ></li>
                    <li className="mx-2">Hours</li>
                  </ul>
                  <p className="font-semibold my-3 text-3xl">
                    <span
                      className={`${
                        false ? "text-[#D65DB1]" : "text-[#333333]"
                      }`}
                    >
                      25:
                    </span>
                    <span
                      className={`${
                        false ? "text-[#F29C2B]" : "text-[#333333]"
                      }`}
                    >
                      06:
                    </span>
                    <span
                      className={`${
                        false ? "text-[#FFC75F]" : "text-[#333333]"
                      }`}
                    >
                      21:
                    </span>
                    <span
                      className={`${
                        false ? "text-[#FF0000]" : "text-[#333333]"
                      }`}
                    >
                      23
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center my-4">
                <div className="rounded-lg shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                  <h3 className="text-primary font-medium text-sm mb-1">
                    Collected Date
                  </h3>
                  <p className="text-[#333333] text-base font-medium">
                    {/* 10 June, 2022 */}
                    ---- ---- ----
                  </p>
                </div>
                <div className="rounded-lg shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                  <h3 className="text-primary font-medium text-sm mb-1">
                    Payment Date
                  </h3>
                  <p className="text-[#333333] text-base font-medium">
                    {/* 10 Aug, 2022 */}
                    ---- ---- ----
                  </p>
                </div>
                <div className="rounded-lg shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                  <h3 className="text-primary font-medium text-sm mb-1">
                    Financing Period
                  </h3>
                  <p className="text-[#333333] text-base font-medium">
                    {/* 10 Months */}
                    ---- ---- ----
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:w-4/6">
            <LargeCard>
              <div className="w-full">
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-xl font-semibold text-[#333333]">
                    Financing Summary
                  </p>
                  <p className="font-medium text-lg text-[#808080]">
                    Application ID: 0000000
                  </p>
                </div>
                <div className="w-full my-5 flex flex-row justify-start items-start gap-2">
                  <div className=" w-2/6">
                    <SmallCard classNames=" bg-[#FEF4E7] text-orange-600 w-full">
                      <p className="text-2xl font-semibold text-[#F29C2B]">
                        {/* 25000 */}0
                      </p>
                    </SmallCard>
                    <p className="text-base mt-4 font-medium text-[#808080]">
                      Loan Amount
                    </p>
                  </div>
                  <div className=" w-2/6">
                    <SmallCard classNames=" bg-[#E5FFEF] text-orange-600 w-full">
                      <p className="text-2xl font-semibold text-[#00A03E]">
                        {/* 10,000 */}0
                      </p>
                    </SmallCard>
                    <p className="text-base mt-4 font-medium text-[#808080]">
                      {" "}
                      Already repaid
                    </p>
                  </div>
                  <div className=" w-2/6">
                    <SmallCard classNames=" bg-[#FEEDE6] text-orange-600 w-full">
                      <p className="text-2xl font-semibold text-[#FF0000]">
                        {/* 15,000 */}0
                      </p>
                    </SmallCard>
                    <p className="text-base mt-4 font-medium text-[#808080]">
                      Reamaing to be repaid
                    </p>
                  </div>
                </div>
              </div>
            </LargeCard>
            <div className="my-5">
              <LargeCard>
                <div className="">
                  <div>
                    <h2 className="text-xl font-semibold text-[#333333] text-left">
                      Financing Tracker
                    </h2>
                  </div>
                  <div className="w-full flex flex-row justify-start items-start">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                      <Chart />
                      <div>
                        <ul className="flex flex-row justify-start items-center text-base font-medium">
                          <li
                            className={`w-2 h-2 rounded-full ${
                              false ? "bg-[#D65DB1]" : "bg-[#333333]"
                            }`}
                          ></li>
                          <li className="mx-2">Days</li>
                          <li
                            className={`w-2 h-2 rounded-full ${
                              false ? "bg-[#F29C2B]" : "bg-[#333333]"
                            }`}
                          ></li>
                          <li className="mx-2">Hours</li>
                          <li
                            className={`w-2 h-2 rounded-full ${
                              false ? "bg-[#FFC75F]" : "bg-[#333333]"
                            }`}
                          ></li>
                          <li className="mx-2">Days</li>
                          <li
                            className={`w-2 h-2 rounded-full ${
                              false ? "bg-[#FF0000]" : "bg-[#333333]"
                            }`}
                          ></li>
                          <li className="mx-2">Hours</li>
                        </ul>
                        <p className="font-semibold my-3 text-3xl">
                          <span
                            className={`${
                              false ? "text-[#D65DB1]" : "text-[#333333]"
                            }`}
                          >
                            25:
                          </span>
                          <span
                            className={`${
                              false ? "text-[#F29C2B]" : "text-[#333333]"
                            }`}
                          >
                            06:
                          </span>
                          <span
                            className={`${
                              false ? "text-[#FFC75F]" : "text-[#333333]"
                            }`}
                          >
                            21:
                          </span>
                          <span
                            className={`${
                              false ? "text-[#FF0000]" : "text-[#333333]"
                            }`}
                          >
                            23
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center gap-3">
                      <div className="rounded-md shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                        <h3 className="text-primary font-medium text-sm mb-1">
                          Collected Date
                        </h3>
                        <p className="text-base font-medium text-[#333333]">
                          {/* 10 June, 2022 */}
                          ---- ---- ----
                        </p>
                      </div>
                      <div className="rounded-md shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                        <h3 className="text-primary font-medium text-sm mb-1">
                          Payment Date
                        </h3>
                        <p className="text-base font-medium text-[#333333]">
                          {/* 10 Aug, 2022 */}
                          ---- ---- ----
                        </p>
                      </div>
                      <div className="rounded-md shadow-sm bg-[#F6FAFD] my-2 py-2 px-1 text-center w-40">
                        <h3 className="text-primary font-medium text-sm mb-1">
                          Financing Period
                        </h3>
                        <p className="text-base font-medium text-[#333333]">
                          {/* 10 Months */}
                          ---- ---- ----
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </LargeCard>
            </div>
          </div>
          <div className="hidden lg:block  lg:w-2/6 ">
            <div className="w-full">
              <LargeCard classNames="w-full">
                <div>
                  <p className="text-xl font-semibold text-[#333333] text-left">
                    Financing History
                  </p>
                </div>

                {/* history's component  */}

                {/* <div className="w-full mt-5 mb-5">
                  {historyList.map((item, index) => (
                    <SingleHistory key={index} date={item.date} id={item.id} />
                  ))}
                </div>

                <div className="mt-20 mb-8 w-48 h-14 mx-auto ">
                  <PrimaryButton
                    handle={() => navigate("/history/loans", { replace: true })}
                  >
                    See all history
                  </PrimaryButton>
                </div> */}

                {/* no history component */}

                <div className="w-full">
                  <div className="bg-[#F6FAFD] w-32 h-32 mt-12 mb-2 mx-auto rounded-full flex justify-center items-center">
                    <svg
                      width="65"
                      height="65"
                      viewBox="0 0 65 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.5221 30.6041V19.0666C55.5221 8.15207 52.9763 5.41663 42.7388 5.41663H22.2638C12.0263 5.41663 9.48047 8.15207 9.48047 19.0666V49.5624C9.48047 56.7666 13.4347 58.4729 18.2284 53.327L18.2554 53.2999C20.4763 50.9437 23.8617 51.1333 25.7846 53.7062L28.52 57.3624"
                        stroke="#3385D7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.668 18.9584H43.3346"
                        stroke="#3385D7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.375 29.7916H40.625"
                        stroke="#3385D7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M49.3221 40.0028L39.7347 49.5904C39.3555 49.9695 39.0034 50.6737 38.9221 51.1883L38.4075 54.8445C38.218 56.1716 39.1388 57.0925 40.4659 56.9029L44.1222 56.3883C44.6368 56.307 45.368 55.9549 45.7201 55.5757L55.3076 45.9883C56.9597 44.3362 57.7451 42.4133 55.3076 39.9758C52.8972 37.5654 50.9742 38.3507 49.3221 40.0028Z"
                        stroke="#3385D7"
                        strokeWidth="2.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M47.9375 41.384C48.75 44.309 51.025 46.584 53.95 47.3965"
                        stroke="#3385D7"
                        strokeWidth="2.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl text-black font-semibold my-4">
                    No History Yet
                  </h3>
                  <p className="text-[#B3B3B3]">
                    Tap the button below to apply for a new loan
                  </p>

                  <div className="my-8 w-44 h-12 mx-auto ">
                    <PrimaryButton
                      handle={() => navigate("/application", { replace: true })}
                    >
                      Apply for loan
                    </PrimaryButton>
                  </div>
                </div>
              </LargeCard>
            </div>
          </div>
        </div>
      </div>
    </ConsumerDashboardWrapper>
  );
};

export default Dashboard;
