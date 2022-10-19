import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// skeleton for table data loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchSort from "../../components/history/SearchSort";
import EmptyConsumerClaim from "../../components/history/EmptyConsumerClaim";
import Tabs from "../../components/nav/Tabs";

const DeclinedClaims = () => {
  let navigate = useNavigate();
  const [isTableLoading, setIsTableLoading] = useState(true);
  // show preloader

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTableLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Tabs
        tabsArray={[
          { name: "Received", path: "/consumer-claims/received" },
          { name: "Accepted", path: "/consumer-claims/accepted" },
          { name: "Declined", path: "/consumer-claims/declined" },
        ]}
      />
      <section className=" px-3 py-5 dashboard-custom-shadow md:overflow-auto md:w-[95%] md:mx-auto md:px-0">
        <SearchSort />
        <table className="w-full">
          <thead className="">
            <tr className="mb-5 border-b-2 border-gray-100">
              <th className="py-3 px-3 whitespace-nowrap font-semibold">
                Application ID
              </th>
              <th className="py-3 px-3  whitespace-nowrap font-semibold hidden lg:table-cell">
                Claim Description
              </th>
              <th className="py-3 px-3 whitespace-nowrap font-semibold hidden lg:table-cell">
                Date & Time
              </th>
              <th className="py-3 px-3  whitespace-nowrap font-semibold ">
                Amount
              </th>
            </tr>
            <tr className="bg-red-300 h-5"></tr>
          </thead>
          <tbody>
            {isTableLoading &&
              [1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index} className="odd:bg-[#F6FAFD] cursor-pointer">
                  <td className="p-[18px] whitespace-nowrap font-medium ">
                    <Skeleton />
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                    <Skeleton />
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                    <Skeleton />
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium ">
                    <Skeleton />
                  </td>
                  {/* <td className="p-[18px] whitespace-nowrap font-medium  ">
                    <p
                      className={`p-1 w-24 capitalize whitespace-nowrap mx-auto font-medium `}
                    >
                      <Skeleton />
                    </p>
                  </td> */}
                </tr>
              ))}{" "}
          </tbody>
        </table>
        {!isTableLoading && <EmptyConsumerClaim />}
      </section>
    </>
  );
};

export default DeclinedClaims;
