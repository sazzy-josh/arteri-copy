import React, { useState } from "react";
import LargeCard from "../../components/cards/LargeCard";
import SmallCard from "../../components/cards/SmallCard";
import Chart from "../../components/chart/HalfPie";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="lg:w-1/5 md:w-2/5 hidden lg:flex md:flex h-screen fixed mr-auto">
          <SideMenu selectDash={true} />
        </div>
        <div className="lg:w-4/5 md:w-3/5 w-full ml-auto">
          <Container>
            <Header />
            {/* <div className="w-full my-5 lg:flex md:flex hidden">
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <MobileHeader
                selectDash={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div> */}
            {!isOpen && (
              <div className="w-full px-5 lg:px-0 md:px-0 flex flex-col justify-start items-start">
                <div>
                  <p className="font-bold text-left text-2xl text-black mt-2 mb-5">
                    Consumer Health Financing Dashboard
                  </p>
                </div>
                <div className="w-full flex lg:flex-row md:flex-col flex-col justify-start items-start">
                  <div className="my-5 block lg:hidden md:hidden">
                    <p className="font-bold text-left text-2xl text-black my-2">
                      Consumer Financing Summary
                    </p>
                    <p className="font-bold text-left text-base text-gray-400">
                      Application ID: 6377388
                    </p>
                    <div className="w-full my-5">
                      <div className="my-5">
                        <SmallCard classNames="bg-orange-50 text-orange-600 w-full h-36">
                          <p className="text-4xl">2000</p>
                          <p className="text-base">Loan Amount</p>
                        </SmallCard>
                      </div>
                      <div className="my-5">
                        <SmallCard classNames="bg-green-50 text-green-600 w-full h-36">
                          <p className="text-4xl">10000</p>
                          <p className="text-base">Already repaid</p>
                        </SmallCard>
                      </div>
                      <div className="my-5">
                        <SmallCard classNames="bg-red-50 text-red-600 w-full h-36">
                          <p className="text-4xl">2000</p>
                          <p className="text-base w-32">
                            Remaining to be repaid
                          </p>
                        </SmallCard>
                      </div>
                    </div>
                    <div className="w-full">
                      <div>
                        <p className="text-left text-2xl font-bold">
                          Financing Tracker
                        </p>
                      </div>
                      <div className="w-full flex flex-col justify-center items-center">
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
                      <div className="w-full flex flex-col justify-center items-center">
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
                  <div className="hidden lg:block md:block lg:w-3/4">
                    <LargeCard>
                      <div className="w-full">
                        <div className="w-full flex flex-row justify-start items-start">
                          <p className="font-bold text-xl text-black mr-5">
                            Financing Summary
                          </p>
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
                            <h2 className="font-bold text-left">
                              Financing Tracker
                            </h2>
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
                                <h3 className="text-sky-600">
                                  Financing Period
                                </h3>
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
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
