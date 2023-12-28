import React from "react";

const Last28DaysDataTooltip = ({ data28Days }) => {
  return (
    <div className="bg-gray-800 absolute -right-20 text-white p-2 rounded-md text-xs z-10 transition-opacity opacity-100">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2">
                FCP
              </th>
              <th scope="col" className="px-2">
                LCP
              </th>
              <th scope="col" className="px-2">
                CLS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
              <td className="px-2 whitespace-nowrap">
                {data28Days.firstContentfulPaint}
              </td>
              <td className="px-2 whitespace-nowrap">
                {data28Days.largestContentfulPaint}
              </td>
              <td className="px-2 whitespace-nowrap">
                {data28Days.cumulativeLayoutShift}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Last28DaysDataTooltip;
