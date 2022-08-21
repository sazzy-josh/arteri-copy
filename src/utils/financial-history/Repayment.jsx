import React from "react";
import SearchSort from "../../components/history/SearchSort";
import HistoryTable from "../../components/HistoryTable";
import Data from "../financial-history/FinancialHistoryData";

const repayment = () => {
  return (
    <section className=" px-3 py-5 shadow-2xl shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0">
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
            <HistoryTable
              key={index}
              application_id={item.application_id}
              collection_date={item.collection_date}
              due_date={item.due_date}
              amount={item.amount}
              status={item.status}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default repayment;
