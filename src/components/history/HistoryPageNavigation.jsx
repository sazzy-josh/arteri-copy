import React from "react";
import { NavLink } from "react-router-dom";

const HistoryPageNavigation = () => {
  return (
    <div className="px-5 flex justify-start items-center gap-2  mb-8 border-b border-gray-300">
      {/* <NavLink to="/history/repayment" className="history-tab">
        Repayment
      </NavLink> */}
      <NavLink to="/history/loans" className="history-tab text-left">
        Loan
      </NavLink>
      <NavLink to="/history/bnpl" className="history-tab">
        BNPL
      </NavLink>
    </div>
  );
};

export default HistoryPageNavigation;
