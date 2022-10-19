import React from "react";

const FinancialSummary = () => {
  return (
    <div>
      <div className="mb-10 md:flex md:justify-between md:items-center">
        <h4 className="font-semibold text-2xl text-[#333333] hidden md:block">
          Financing Summary
        </h4>
        <p className="font-medium text-left text-xl text-[#808080]">
          Application ID: 45454545
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <div className="w-full h-32 bg-[#FEF4E7] rounded-lg flex flex-col justify-center items-center gap-2 sm:w-80">
          <p className="text-[#F29C2B] font-semibold text-2xl">25,000</p>
          <p className="text-[#808080] font-medium text-lg">Loan Amount</p>
        </div>
        <div className="w-full h-32 bg-[#FEF4E7] rounded-lg flex flex-col justify-center items-center gap-2 sm:w-80">
          <p className="text-[#F29C2B] font-semibold text-2xl">25,000</p>
          <p className="text-[#808080] font-medium text-lg">Loan Amount</p>
        </div>
        <div className="w-full h-32 bg-[#FEF4E7] rounded-lg flex flex-col justify-center items-center gap-2 sm:w-80">
          <p className="text-[#F29C2B] font-semibold text-2xl">25,000</p>
          <p className="text-[#808080] font-medium text-lg">Loan Amount</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
