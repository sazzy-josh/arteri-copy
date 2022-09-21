import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";
import SearchSort from "../../components/history/SearchSort";
import Pagination from "../../components/Pagination";
import TableV2 from "../../components/tables/TableV2";

// skeleton for table data loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Repayment = () => {
  let navigate = useNavigate();
  const [test, setTest] = useState(false);
  const Data = [
    {
      id: 1,
      application_id: "#74563890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "payed",
    },
    {
      id: 2,
      application_id: "#84953890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "payed",
    },
    {
      id: 3,
      application_id: "#22583890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "declined",
    },
    {
      id: 4,
      application_id: "#54003890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "declined",
    },
  ];
  if (test) {
    return <TableV2 />;
  }
  return (
    <>
      <HistoryPageNavigation />

      <section className=" px-3 py-5 sm:shadow-2xl sm:shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0">
        <SearchSort />
        <SkeletonTheme width={"80%"} borderRadius={"1rem"}>
          <table className="w-full">
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
            </thead>
            <tbody>
              {Data.map((item, index) => (
                <tr
                  key={index}
                  onClick={() =>
                    navigate(
                      `/history/details/${item.application_id.slice(
                        1,
                        item.application_id.length
                      )}`
                    )
                  }
                  className="odd:bg-[#F6FAFD] cursor-pointer"
                >
                  <td className="py-[18px] px-[0px]   whitespace-nowrap font-medium ">
                    {/* <Link
                    className="inline-block h-full w-full"
                    to="/history/details/repayment-${item.application_id.slice(
                      1,
                      item.application_id.length
                    )}"
                  >
                  </Link> */}
                    {item.application_id$ || <Skeleton />}
                  </td>
                  <td className="py-[18px] px-[0px] whitespace-nowrap font-medium hidden lg:table-cell">
                    {item.collection_date$ || <Skeleton />}
                  </td>
                  <td className="py-[18px] px-[0px] whitespace-nowrap font-medium hidden lg:table-cell">
                    {item.due_date$ || <Skeleton />}
                  </td>
                  <td className="py-[18px] px-[0px] whitespace-nowrap font-medium hidden lg:table-cell">
                    {item.amount$ || <Skeleton />}
                  </td>
                  <td className="  py-[18px] px-[0px] whitespace-nowrap font-medium  ">
                    <p
                      className={`p-1 w-24 capitalize whitespace-nowrap mx-auto font-medium ${
                        item.status === "payed$" &&
                        "text-[#00A03E] bg-[#E5FFEF]"
                      } ${
                        item.status === "declined$" &&
                        "text-[#DE4307] bg-[#FEEDE6]"
                      }`}
                    >
                      {item.statuse || <Skeleton />}
                    </p>
                  </td>
                  {/* <td className="py-[18px] px-[0px] whitespace-nowrap hidden lg:table-cell">
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
        </SkeletonTheme>
      </section>
      <div className=" flex flex-col justify-center items-center my-7">
        <Pagination data={Data} />
      </div>
    </>
  );
};

export default Repayment;
