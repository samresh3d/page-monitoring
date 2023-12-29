import React from "react";

const IndicatorComponent = ({ type, value, tooltipText }) => {

  const getCircleColor = (value) => {
    if (value < 45) {
      return "#FF3333"; // Red circle
    } else if (value < 75) {
      return "#FFA500"; // Amber circle
    } else {
      return "#33CC33"; // Green circle
    }
  };

  const percentageToDashArray = (percentage) => {
    const totalLength = 182.212373908208; // Total length of the circle
    const dashArrayValue = (percentage / 100) * totalLength;
    return `${dashArrayValue} ${totalLength - dashArrayValue}`;
  };

  const circleColor = getCircleColor(value);

  return (
    <div className=" relative">
      <div
        className="flex m-auto h-full w-full flex-col items-center justify-center transition-transform transform-gpu duration-200 ease-in-out"
        style={{ width: "42px", height: "42px" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="4" className="overflow-visible" fill="none" height="42" width="42">
          <circle
            cx="32"
            cy="32"
            r="29"
            fillOpacity=".1"
            strokeOpacity=".1"
            fill={circleColor}
            stroke={circleColor}
            className=""
            transform="rotate(-90 32 32)"
          ></circle>
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke={circleColor}
            strokeDasharray={percentageToDashArray(value)}
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(-90 32 32)"
            className="drop-shadow-sm filter"
          ></circle>
        </svg>
        <div className="absolute flex tabular-nums">
          <div className="flex h-full w-full flex-col items-center justify-center" style={{ width: "42px", height: "42px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="4" className="overflow-visible" fill="none" height="42" width="42">
              <circle
                cx="32"
                cy="32"
                r="29"
                fillOpacity="0"
                strokeOpacity=".1"
                fill={circleColor}
                stroke={circleColor}
                className=""
                transform="rotate(-90 32 32)"
              ></circle>
              <circle
                cx="32"
                cy="32"
                r="29"
                fill="none"
                stroke={circleColor}
                strokeDasharray={percentageToDashArray(value)}
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(-90 32 32)"
                className="drop-shadow-sm filter"
              ></circle>
            </svg>
            <div className="absolute flex tabular-nums">
              <div className="font-mono text-xs font-medium" style={{ color: circleColor }}>
                {value}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorComponent;
