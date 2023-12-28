import React from "react";
import useApiData from "./useApiData";
import DetailsComponent from "./DetailsComponent";

const ReportingComponent = ({ pageName, apiUrl, isMobileView }) => {
  const { apiData, loading, error } = useApiData(apiUrl);

  const renderContent = () => {
    if (loading) {
      return (
        <p className="text-center p-10">Loading...{pageName.toLowerCase()}</p>
      );
    }

    if (error) {
      return (
        <p className="text-center">Error fetching data: {error.message}</p>
      );
    }

    const { desktop: desktopData, mobile: mobileData } = apiData;
    const dataToShow = isMobileView ? mobileData : desktopData;

    const pageUrl = {
      homePage: "https://www.maxlifeinsurance.com",
      termLead:
        "https://www.maxlifeinsurance.com/term-insurance-plans/premium-calculator",
      savingLead:
        "https://www.maxlifeinsurance.com/investment-plans/investment-calculator",
    };

    return (
      <DetailsComponent
        url={pageUrl[pageName]}
        requestTime={apiData.reportTime.split("Report from")[1]}
        fcp={dataToShow.firstContentfulPaint.split("s")[0]}
        lcp={dataToShow.largestContentfulPaint.split("s")[0]}
        tbt={dataToShow.totalBlockingTime.split("ms")[0]}
        cls={dataToShow.cumulativeLayoutShift}
        performance={dataToShow.performance}
        accessibility={dataToShow.accessibility}
        seo={dataToShow.sEO}
        data28Days={dataToShow.latest28DayCollection}
        bestPractice={dataToShow.bestPractices}
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
