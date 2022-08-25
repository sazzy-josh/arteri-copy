import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";

import SearchSort from "../../components/history/SearchSort";

const Loans = () => {
  let navigate = useNavigate();
  const Data = [
    {
      id: 1,
      application_id: "#74563890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "pending",
    },
    {
      id: 2,
      application_id: "#74563890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "accepted",
    },
    {
      id: 3,
      application_id: "#74563890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "declined",
    },
  ];
  return (
    <>
      <HistoryPageNavigation />

      <section className=" px-3 py-5 sm:shadow-2xl sm:shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0">
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
              <tr
                onClick={() =>
                  navigate(
                    `/history/details/${item.application_id.slice(
                      1,
                      item.application_id.length
                    )}`
                  )
                }
                key={index}
                className="odd:bg-[#F6FAFD] cursor-pointer"
              >
                <td className="p-[18px] whitespace-nowrap font-medium ">
                  {item.application_id}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.collection_date}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.due_date}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.amount}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium  ">
                  <p
                    className={`p-1 w-24 capitalize whitespace-nowrap mx-auto font-medium ${
                      item.status.toLowerCase() === "accepted" &&
                      "text-[#00A03E] bg-[#E5FFEF]"
                    } ${
                      item.status.toLowerCase() === "pending" &&
                      "text-[#F29C2B] bg-[#FDEDD9]"
                    } ${
                      item.status.toLowerCase() === "declined" &&
                      "text-[#DE4307] bg-[#FEEDE6]"
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                {/* <td className="p-[18px] whitespace-nowrap hidden lg:table-cell">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
          fill="#808080"
        />
        <path
          d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
          fill="#808080"
        />
        <path
          d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
          fill="#808080"
        />
      </svg>
    </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className=" flex flex-col justify-center items-center my-10">
        <div>infinite pagination</div>
        <div className="w-full px-6 ">
          <button className="w-full h-14 text-lg  outline-none font-medium border-2 border-secondary text-secondary text-center rounded-xl mx-auto my-3 inline-block">
            Back
          </button>
          <button className="w-full h-14 text-lg  outline-none font-medium  bg-secondary text-white text-center rounded-xl mx-auto my-3 inline-block">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Loans;
