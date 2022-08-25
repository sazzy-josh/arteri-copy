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
    <>
      <div className="w-full flex flex-col gap-5 lg:hidden">
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
          |<p className="inline-block mx-2 font-medium">Jump To:</p>
          <select
            disabled={true}
            className="border border-gray-400 rounded-sm p-1 outline-none bg-none"
          >
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

      {/* desktop view */}
      <div className="w-full  items-center justify-between gap-2 hidden lg:flex">
        <div>
          <span className="font-medium mr-[5px]">10 Results</span> |{" "}
          <span className="font-medium mx-[5px]">Show:</span>{" "}
          <select
            disabled={true}
            className="outline-none border border-gray-700 py-1 px-2 mr-2 rounded-sm"
          >
            <option value="3" className="text-gray-700">
              3
            </option>
          </select>
          | <span className="font-medium mx-[5px]">Jump To</span>
          <select className="outline-none border border-gray-700 py-1 px-2 mr-[5px] rounded-sm">
            <option value="20" className="text-gray-700 disabled={true}">
              20
            </option>
          </select>
        </div>
        <div>
          <p className="w-6 h-6 leading-6 text-center border  border-gray-500 rounded-[5px] text-sm text-gray-600 inline-block mr-3  ">
            1
          </p>
          <p className="w-6 h-6 leading-6 text-center  rounded-[5px] text-sm inline-block bg-primary text-white mr-3">
            2
          </p>
          <p className="w-6 h-6 leading-6 text-center border  border-gray-500 rounded-[5px] text-sm text-gray-600 inline-block mr-3  ">
            3
          </p>
          <p className="w-6 h-6 leading-6 text-center border  border-gray-500 rounded-[5px] text-sm text-gray-600 inline-block mr-2  ">
            4
          </p>
          <span className="rounded-full w-1 h-1 inline-block border bg-gray-600 mx-1 "></span>
          <span className="rounded-full w-1 h-1 inline-block border bg-gray-600 mx-1 "></span>
          <span className="rounded-full w-1 h-1 inline-block border bg-gray-600 mx-1 mr-2"></span>
          <p className="w-6 h-6 leading-6 text-center border  border-gray-500 rounded-[5px] text-sm  text-gray-600 inline-block mr-4  ">
            20
          </p>
          <button className="w-[85px] h-12 text-lg  outline-none font-medium border-2 border-secondary text-secondary text-center rounded-lg mr-3 my-3 inline-block">
            Back
          </button>
          <button className="w-[85px] h-12 text-lg  outline-none font-medium  bg-secondary text-white text-center rounded-lg  my-3 inline-block">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
