import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
// import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";
import SideMenu from "../../components/nav/SideBar";

// import styles
import "../../styles/history.css";

const HistoryDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
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
                </section>
                <section className="px-5  py-10 lg:rounded-md lg:shadow-2xl lg:shadow-[#EAF2FB]">
                  <div className="  flex flex-col items-start gap-10  mb-14 lg:flex-row lg:items-center">
                    <div className=" w-full flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-lg text-left mb-2">
                          Application ID:
                        </h3>
                        <p className="font-bold text-2xl text-left">#{id}</p>
                      </div>
                      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#EAF2FB] lg:hidden">
                        <svg
                          // width="24"
                          // height="24"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.2599 3.60022L5.04985 12.2902C4.73985 12.6202 4.43985 13.2702 4.37985 13.7202L4.00985 16.9602C3.87985 18.1302 4.71985 18.9302 5.87985 18.7302L9.09985 18.1802C9.54985 18.1002 10.1799 17.7702 10.4899 17.4302L18.6999 8.74022C20.1199 7.24022 20.7599 5.53022 18.5499 3.44022C16.3499 1.37022 14.6799 2.10022 13.2599 3.60022Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.8901 5.0498C12.3201 7.8098 14.5601 9.9198 17.3401 10.1998"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 22H21"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className=" flex gap-4 items-center">
                      <span className="font-medium text-lg">Status:</span>
                      <span className="capitalize bg-[#FDEDD9] text-[#F29C2B] text-base text-center w-24 h-6 leading-6 inline-block rounded-lg font-medium">
                        pending
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-7 items-start mb-8 md:mb-10 lg:flex-row lg:gap-12">
                    <div className="text-start">
                      <p className="font-semibold mb-3">Issued By</p>
                      <p>Arteri</p>
                    </div>
                    <div className="text-start">
                      <p className="font-semibold mb-3">
                        Collection Date & Time
                      </p>
                      <p>22 Jun, 2022 - 10:39PM</p>
                    </div>
                    <div className="text-start">
                      <p className="font-semibold mb-3">Due Date & Time</p>
                      <p>22 Jun, 2022 - 10:39PM</p>
                    </div>
                    <div className="text-start">
                      <p className="font-semibold mb-3">Amount</p>
                      <p>35,000</p>
                    </div>
                  </div>

                  {/* comment section to be displayed dynamically */}
                  <div className="text-start mb-10 md:w-10/12">
                    <p className="font-semibold mb-3">Comment</p>
                    <p>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur duis deserunt mollit dolore
                      cillum minim tempor enim. Elit aute irure tempor cupidatat
                      incididunt sint deserunt ut voluptate aute id deserunt
                      nisi.
                    </p>
                  </div>

                  {/*repayment section  */}
                  <div>
                    <h3 className="text-2xl text-left font-semibold mb-10">
                      Repayment Details
                    </h3>

                    <div className="flex flex-col gap-7 items-start mb-8 md:mb-10 lg:flex-row lg:gap-12">
                      <div className="text-start">
                        <p className="font-semibold mb-3">Repayment Amount</p>
                        <p>35,000</p>
                      </div>
                      <div className="text-start">
                        <p className="font-semibold mb-3">Repayment Date</p>
                        <p>22 Jun, 2022 - 10:39PM</p>
                      </div>

                      <div className="text-start">
                        <p className="font-semibold mb-3">Days Left</p>
                        <p>22 Days</p>
                      </div>
                    </div>
                    {/* <div className="w-10">
                      <PrimaryButton>Repay Loan</PrimaryButton>
                    </div> */}
                    <div className="w-full md:text-right">
                      <button className=" text-white bg-secondary font-medium w-full h-14 rounded-lg  cursor-pointer md:w-44 hover:bg-[#577E2A] transition duration-200 ">
                        Repay Loan
                      </button>
                    </div>
                  </div>
                </section>
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HistoryDetails;
