import React, { useState } from "react";

const Pagination = ({ data }) => {
  // const [currentPage, setCurrentPage] = useState(2);
  // const [itemsPerPage, setItemsPerPage] = useState(3);
  // const pages = [];
  // for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
  //   pages.push(i);
  // }
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(currentItems);
  return (
    <div className="w-full flex flex-col gap-5 md:flex-row ">
      {" "}
      {/* {currentItems.map((item, index) => (
        <span
          key={index}
          className="h-6 w-6 leading-6 inline-block border border-gray-300 text-sm mx-2 "
        >
          {JSON.stringify(item.id)}
        </span>
      ))} */}
      <div>
        <p className="w-6 h-6 leading-6 text-center border  border-gray-500 rounded-[5px] text-sm text-gray-600 inline-block mr-4  ">
          1
        </p>
        <p className="w-6 h-6 leading-6 text-center  rounded-[5px] text-sm inline-block bg-primary text-white mr-2">
          2
        </p>
        <span className="rounded-full w-1 h-1 inline-block border bg-gray-600 mx-1 "></span>
        <span className="rounded-full w-1 h-1 inline-block border bg-gray-600 mx-1 "></span>
        <span className="rounded-full w-1 h-1 inline-block border bg-gray-600 mx-1 mr-2"></span>
        <p className="w-6 h-6 leading-6 text-center border  border-gray-500 rounded-[5px] text-sm  text-gray-600 inline-block mr-4  ">
          3
        </p>
        |<p className="inline-block mx-2 font-medium">Jump to:</p>
        <select className="border border-gray-400 rounded-sm p-1 outline-none">
          <option value="20">20</option>
        </select>
      </div>
      <div className="w-full px-6 ">
        <button className="w-full h-14 text-lg  outline-none font-medium border-2 border-secondary text-secondary text-center rounded-xl mx-auto my-3 inline-block">
          Back
        </button>
        <button className="w-full h-14 text-lg  outline-none font-medium  bg-secondary text-white text-center rounded-xl mx-auto my-3 inline-block">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
