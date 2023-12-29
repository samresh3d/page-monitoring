import React from 'react';

const ToggleButton = ({ isMobileView, toggleView }) => {
  return (
    <div className="flex items-center mb-2 p-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isMobileView}
          onChange={toggleView}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-grey-300 dark:peer-focus:ring-grey-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-grey-600"></div>
        <span className="ms-3  font-medium">
          {isMobileView ? 'Mobile' : 'Desktop'}
        </span>
      </label>
    </div>
  );
};

export default ToggleButton;
