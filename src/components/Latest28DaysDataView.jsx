import React, { useState } from "react";
import Last28DaysDataTooltip from "./Last28DaysDataTooltip";

const Latest28DaysDataView = ({ data28Days }) => {

  const [showLast28DaysData, setShowLast28DaysData] = useState(false);

  const handleShowDataToggle = () => {
    setShowLast28DaysData(!showLast28DaysData);
  };
  return (
    <div className="sm:col-span-1">
      <img
        className="top-0 right-0 cursor-pointer"
        onClick={handleShowDataToggle}
        alt="28 Days report"
        loading="lazy"
        width="25"
        height="12"
        decoding="async"
        data-nimg="1"
        src="/calander.svg"
      ></img>

      <div className="relative text-sm text-gray-600">
        {showLast28DaysData && <Last28DaysDataTooltip data28Days={data28Days} />}
      </div>
    </div>
  );
};

export default Latest28DaysDataView;
