// App.js
import React, { useState } from 'react';
import ReportingComponent from './components/ReportingComponent';
import ToggleButton from './components/ToggleButton';

function App() {
  const apiUrl = 'https://khaa290gh8.execute-api.ap-south-1.amazonaws.com/api/dynamo-data-extract?page=home';
  const apiUrl1 = 'https://khaa290gh8.execute-api.ap-south-1.amazonaws.com/api/dynamo-data-extract?page=term';
  const apiUrl2 = 'https://khaa290gh8.execute-api.ap-south-1.amazonaws.com/api/dynamo-data-extract?page=saving';

  const [isMobileView, setMobileView] = useState(true);

  const toggleView = () => {
    setMobileView(!isMobileView);
  };

  return (
    <>
      <ToggleButton isMobileView={isMobileView} toggleView={toggleView} />
      <div className="App grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 px-10 sm:px-5 gap-5 place-items-stretch divide-x pad">
        <ReportingComponent pageName="homePage" apiUrl={apiUrl} isMobileView={isMobileView} />
        <ReportingComponent pageName="termLead" apiUrl={apiUrl1} isMobileView={isMobileView} />
        <ReportingComponent pageName="savingLead" apiUrl={apiUrl2} isMobileView={isMobileView} />
      </div>
    </>
  );
  
}

export default App;
