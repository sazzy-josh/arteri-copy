import React from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import SideMenu from "../../components/nav/SideBar";

const Dashboard = () => {
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5">
          <SideMenu />
        </div>
        <div className="w-4/5">
          <Container>
            <div className="w-full my-5">
                <Header />
            </div>
            <div className="w-full flex flex-row justify-start items-start">
              <div className="">
                <LargeCard />
              </div>
              <div className="">
                <LargeCard />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
