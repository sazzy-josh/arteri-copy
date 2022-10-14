import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// skeleton for table data loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchSort from "../../components/history/SearchSort";
import EmptyProviderClaim from "../../components/history/EmptyProviderClaim";

const DeclinedClaims = () => {
  let navigate = useNavigate();
  const [isTableLoading, setIsTableLoading] = useState(true);
  // show preloader

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTableLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="px-5 flex justify-between items-center md:justify-start mb-8 border-b border-gray-200">
        <NavLink to="/provider-claims/received" className="history-tab">
          Received
        </NavLink>
        <NavLink to="/provider-claims/accepted" className="history-tab">
          Accepted
        </NavLink>
        <NavLink to="/provider-claims/declined" className="history-tab">
          Declined
        </NavLink>
      </div>
      <section className=" px-3 py-5 sm:shadow-2xl sm:shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0">
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
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
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
        {!isTableLoading && <EmptyProviderClaim />}
      </section>
    </>
  );
};

export default DeclinedClaims;
