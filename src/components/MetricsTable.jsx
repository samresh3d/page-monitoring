import React from "react";
import IndicatorComponent from "./IndicatorComponent";

const MetricsTable = ({
  fcp,
  lcp,
  tbt,
  cls,
  performance,
  accessibility,
  seo,
  bestPractice,
}) => {
  return (
    <table className="border-l border-r border-b border-gray-300 w-full">
      <thead className="hidden uppercase sm:table-header-group">
        <tr className="border-b text-xs font-medium text-gray-500">
          <th className="px-2 py-2"></th>
          <th className="px-2 py-2"></th>
          <th className="px-2 py-2">FCP</th>
          <th className="px-2 py-2">LCP</th>
          <th className="px-2 py-2">TBT</th>
          <th className="px-2 py-2">CLS</th>
          <th className="px-2 py-2"></th>
          <th className="px-2 py-2">Performance</th>
          <th className="px-2 py-2">Accessibility</th>
          <th className="px-2 py-2">SEO</th>
          <th className="px-2 py-2">Best Practices</th>
        </tr>
      </thead>
      <tbody className="sm:table-row-group">
        <tr className="group text-center hover:bg-gray-50/50">
          <td className="px-2 py-3">
            <div className="flex h-2 w-2 flex-shrink-0 rounded-full bg-green-400"></div>
          </td>
          <td className="px-2 py-3">
            <div className="flex items-center font-medium">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 bg-gray-100/50 drop-shadow-md">
                  {/* Assuming the image source is dynamic */}
                  <img
                    alt="Flag for India"
                    loading="lazy"
                    width="16"
                    height="12"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-sm"
                    src="/flag.svg"
                    style={{
                      color: "transparent",
                      height: "13.5px",
                      width: "17.7188px",
                    }}
                  ></img>
                </div>
                <span className="whitespace-nowrap text-sm">India</span>
              </div>
            </div>
          </td>
          <td className="px-2 py-3 text-sm tracking-wider">{fcp}</td>
          <td className="px-2 py-3 text-sm tracking-wider">{lcp}</td>
          <td className="px-2 py-3 text-sm tracking-wider">{tbt}</td>
          <td className="px-2 py-3 text-sm tracking-wider">{cls}</td>
          <td className="px-2 py-3"></td>
          <td className="px-2 py-3">
            <IndicatorComponent type="performance" value={performance} />
          </td>
          <td className="px-2 py-3">
            <IndicatorComponent type="accessibility" value={accessibility} />
          </td>
          <td className="px-2 py-3">
            <IndicatorComponent type="seo" value={seo} />
          </td>
          <td className="px-2 py-3">
            <IndicatorComponent type="bestPractice" value={bestPractice} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MetricsTable;
