import React from "react";
import SearchSort from "../../components/history/SearchSort";

const BNPL = () => {
  const Data = [
    {
      id: 1,
      application_id: "#74563890",
      date_time: "22 Jun, 2022 - 10:39PM",
      provider: "Arteri Health Care",
      amount: "35000",
    },
    {
      id: 2,
      application_id: "#74563890",
      date_time: "22 Jun, 2022 - 10:39PM",
      provider: "Caring Pharmacy",
      amount: "35000",
    },
    {
      id: 1,
      application_id: "#74563890",
      date_time: "22 Jun, 2022 - 10:39PM",
      provider: "Good Health Hospital",
      amount: "35000",
    },
  ];
  return (
    <>
      <section className=" px-3 py-5 shadow-2xl shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0">
        <SearchSort />
        <table className="w-full">
          <thead className="">
            <tr className="mb-5 border-b-2 border-gray-100">
              <th className="py-3 px-3 whitespace-nowrap font-semibold">
                Application
              </th>
              <th className="py-3 px-3  whitespace-nowrap font-semibold hidden lg:table-cell">
                Date & Time
              </th>
              <th className="py-3 px-3 whitespace-nowrap font-semibold hidden lg:table-cell">
                Provider
              </th>
              <th className="py-3 px-3  whitespace-nowrap font-semibold ">
                Amount
              </th>
            </tr>
            <tr className="bg-red-300 h-5"></tr>
          </thead>
          <tbody>
            {Data.map((item, index) => (
              <tr key={index} className="odd:bg-[#F6FAFD]">
                <td className="p-[18px] whitespace-nowrap font-medium ">
                  {item.application_id}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.date_time}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.provider}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium ">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default BNPL;
