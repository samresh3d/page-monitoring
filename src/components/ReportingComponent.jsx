import React from "react";
import useApiData from "../hooks/useApiData";
import DetailsComponent from "./DetailsComponent";

const ReportingComponent = ({ pageName, apiUrl, isMobileView }) => {
  const { apiData, loading, error } = useApiData(apiUrl);
  const urlForHistoricalData = `${apiUrl}&days=5`;
  const {
    apiData: historyData,
    loading: historyDataLoading,
    error: historydataError,
  } = useApiData(urlForHistoricalData);

  const renderContent = () => {
    if (loading || historyDataLoading) {
      return (
        <p className="text-center p-10">Loading...{pageName.toLowerCase()}</p>
      );
    }

    if (error || historydataError) {
      return (
        <p className="text-center">Error fetching data: {error.message}</p>
      );
    }
    const { desktop: desktopData, mobile: mobileData } = apiData[0];
    const dataToShow = isMobileView ? mobileData : desktopData;

    const pageUrl = {
      homePage: "https://www.maxlifeinsurance.com",
      termLead:
        "term-insurance-plans/premium-calculator?from=home",
      savingLead:
        "investment-plans/investment-calculator?from=home",
    };

    return (
      <DetailsComponent
        url={pageUrl[pageName]}
        requestTime={apiData[0].reportTime.split("Report from")[1]}
        fcp={dataToShow.firstContentfulPaint.split("s")[0]}
        lcp={dataToShow.largestContentfulPaint.split("s")[0]}
        tbt={dataToShow.totalBlockingTime.split("ms")[0]}
        cls={dataToShow.cumulativeLayoutShift}
        performance={dataToShow.performance}
        accessibility={dataToShow.accessibility}
        seo={dataToShow.sEO}
        data28Days={dataToShow.latest28DayCollection}
        bestPractice={dataToShow.bestPractices}
        historyData={historyData}
        isMobileView = {isMobileView}
      />
    );
  };

  return (
    <div className="mx-auto w-full mb-3 max-w-6xl flex-1">
      {renderContent()}
    </div>
  );
};

export default ReportingComponent;
