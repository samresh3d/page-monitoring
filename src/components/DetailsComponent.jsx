import React from "react";
import Latest28DaysDataView from "./Latest28DaysDataView";
import MetricsTable from "./MetricsTable";
import HistoryDataView from "./HistoryDataView";

const DetailsComponent = ({
  url,
  fcp,
  lcp,
  tbt,
  cls,
  requestTime,
  performance,
  accessibility,
  seo,
  bestPractice,
  data28Days,
  historyData,
  isMobileView,
  detailedReportUrl,
}) => {

  const data = historyData;  

  return (
    <div className="mx-auto w-full max-w-6xl flex-1">
      <div className="w-full">
        <div className="w-full border pb-2">
          <div className="relative">
            <div className="flex w-full justify-between leading-7">
              <dl className="mt-2 flex w-full justify-between px-5	">
                <div className="overflow-hidden sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-800"></dt>
                  <dd className="block w-full truncate text-sm text-gray-600">
                    {url}
                  </dd>
                </div>
                <div className="hidden md:block"></div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-800">
                    
                  </dt>
                  <dd className="text-sm text-gray-600">
                    <span>
                      <span>{requestTime}</span>
                    </span>
                  </dd>
                </div>
                <div  className="flex gap-5">
                <Latest28DaysDataView data28Days={data28Days} />
                <HistoryDataView data={data} isMobileView={isMobileView} detailedReportUrl = {detailedReportUrl}/>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <MetricsTable
        fcp={fcp}
        lcp={lcp}
        tbt={tbt}
        cls={cls}
        performance={performance}
        accessibility={accessibility}
        seo={seo}
        bestPractice={bestPractice}
      />
    </div>
  );
};

export default DetailsComponent;
