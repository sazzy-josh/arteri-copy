import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import Cost from "../../components/terms/Cost";
import Details from "../../components/terms/Details";
import Terms from "../../components/terms/Terms";

const Application = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showCosts, setShowCosts] = useState(false);
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex">
          <SideMenu selectApplication={true} />
        </div>
        <div className="lg:w-4/5 w-full">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <MobileHeader
                selectApplication={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <div className="w-full flex flex-col justify-start items-start">
                <div className="w-full lg:px-0 md:px-0 px-5">
                  <div className="w-full flex flex-row justify-between items-center my-5">
                    <p className="mr-auto text-2xl font-bold">
                      Financing Application
                    </p>
                    <p className="ml-auto text-2xl font-bold text-gray-600">
                      <span>1</span>/<span className="text-sky-600">7</span>
                    </p>
                  </div>
                  <div className="">
                    {showDetails && (
                      <Details
                        handleDecline={() => {
                          setShowTerms(!showTerms);
                          setShowDetails(!showDetails);
                        }}
                        handleAccept={() => {
                          setShowCosts(!showCosts);
                          setShowDetails(!showDetails);
                        }}
                      />
                    )}
                    {showTerms && (
                      <Terms
                        handleAccept={() => {
                          setShowTerms(!showTerms);
                          setShowDetails(!showDetails);
                        }}
                        handleDecline={() => {
                          setShowTerms(!showTerms);
                          setShowDetails(!showDetails);
                        }}
                      />
                    )}
                    {showCosts && <Cost />}
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

export default Application;
