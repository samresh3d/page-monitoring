import React, { useState } from "react";
import HistoryTooltip from "./HistoryTooltip";

const HistoryDataView = ({ data, isMobileView, detailedReportUrl }) => {

  const [showHistoryDaysData, setShowHistoryDaysData] = useState(false);

  const handleShowDataToggle = () => {
    setShowHistoryDaysData(!showHistoryDaysData);
  };
  return (
    <div className="sm:col-span-1">
      <img
        className="top-0 right-0 cursor-pointer"
        onClick={handleShowDataToggle}
        alt="History List"
        loading="lazy"
        width="25"
        height="12"
        decoding="async"
        data-nimg="1"
        src="/list.svg"
      ></img>

      <div className="relative text-sm text-gray-600">
        {showHistoryDaysData && <HistoryTooltip data = {data} isMobileView = {isMobileView} detailedReportUrl={detailedReportUrl} />}
      </div>
    </div>
  );
};

export default HistoryDataView;
