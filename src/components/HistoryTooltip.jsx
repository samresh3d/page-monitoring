import React from "react";

const GridHead = () => (
  <div className="grid grid-cols-6 border text-xs uppercase font-medium bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <div className="p-2 text-center col-span-1">DATE</div>
    <div className="p-2 text-center col-span-1">FCP</div>
    <div className="p-2 text-center col-span-1">LCP</div>
    <div className="p-2 text-center col-span-1">Performance</div>
    <div className="p-2 text-center col-span-1">SEO</div>
    <div className="p-2 text-center col-span-1">Details</div>
  </div>
);

const GridRow = ({ date, fcp, lcp, performance, seo, detailedReportUrl }) => {
  // console.log(date, fcp, lcp, performance, seo );
  return (
    <div className="grid grid-cols-6 bg-white dark:bg-gray-800 dark:border-gray-700 border">
      <div className="p-2 text-center col-span-1">{date}</div>
      <div className="p-2 text-center col-span-1">{fcp}</div>
      <div className="p-2 text-center col-span-1">{lcp}</div>
      <div className="p-2 text-center col-span-1">{performance}</div>
      <div className="p-2 text-center col-span-1">{seo}</div>
      <div className="p-2 text-center col-span-1"><a href={detailedReportUrl} target="_blank" rel="noreferrer">View Report</a></div>
    </div>
  );
};
const HistoryTooltip = ({ data, isMobileView, detailedReportUrl }) => {
  const groupedDataByDate = groupDataByDate(data);

  return (
    <div className="tooltip absolute right-0 text-white p-2 w-max rounded-md text-xs z-10 transition-opacity opacity-100">
      <div className="relative overflow-x-auto">
        {groupedDataByDate.map((group, index) => (
          <div key={index} className="grid-container">
            {index === 0 && <GridHead />}
            {group.data.map((item, innerIndex) => (
              <GridRow
                key={innerIndex}
                date={group.date}
                fcp={
                  item[isMobileView === true ? "mobile" : "desktop"]
                    .firstContentfulPaint
                }
                lcp={
                  item[isMobileView === true ? "mobile" : "desktop"]
                    .largestContentfulPaint
                }
                performance={
                  item[isMobileView === true ? "mobile" : "desktop"].performance
                }
                seo={item[isMobileView === true ? "mobile" : "desktop"].sEO}
                detailedReportUrl = {detailedReportUrl}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const groupDataByDate = (data) => {
  const groupedData = {};

  data.forEach((item) => {
    const date = item.time.split("T")[0];
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(item);
  });

  return Object.keys(groupedData).map((date) => ({
    date,
    data: groupedData[date],
  }));
};

export default HistoryTooltip;
