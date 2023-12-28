import { useState, useEffect } from 'react';

const useApiData = (apiUrl) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // const transformedData = {
        //   desktopData: {
        //     performance: data.desktop.Performance,
        //     accessibility: data.desktop.Accessibility,
        //     bestPractices: data.desktop.scores["Best Practices"],
        //     seo: data.desktop.SEO,
        //     total: 100,
        //     metrics: [
        //       { label: "FCP", value: data.desktop["First Contentful Paint"] },
        //       { label: "LCP", value: data.desktop["Largest Contentful Paint"] },
        //       { label: "TBT", value: data.desktop["Total Blocking Time"] },
        //       { label: "CLS", value: data.desktop["Cumulative Layout Shift"] },
        //     ],
        //   },
        //   mobileData: {
        //     performance: data.mobile.Performance,
        //     accessibility: data.mobile.Accessibility,
        //     bestPractices: data.mobile.scores["Best Practices"],
        //     seo: data.desktop.SEO,
        //     total: 100,
        //     metrics: [
        //       { label: "FCP", value: data.mobile["First Contentful Paint"] },
        //       { label: "LCP", value: data.mobile["Largest Contentful Paint"] },
        //       { label: "TBT", value: data.mobile["Total Blocking Time"] },
        //       { label: "CLS", value: data.mobile["Cumulative Layout Shift"] },
        //     ],
        //   },
        // };
        console.log(data[0])
        setApiData(data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, [apiUrl]);

  return { apiData, loading, error };
};

export default useApiData;
