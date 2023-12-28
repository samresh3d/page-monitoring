// src/PerformanceMonitor.js
import React from 'react';

const PerformanceMonitor = ({ data }) => {
  const { desktop, mobile } = data;

  const renderMetrics = (metrics) => {
    return Object.entries(metrics).map(([metricName, metricValue]) => {
      if (typeof metricValue === 'object') {
        // If the metric value is an object, render nested metrics
        return (
          <div key={metricName} className="mb-4">
            <div className="text-sm font-medium mb-2">{metricName}</div>
            {renderMetrics(metricValue)}
          </div>
        );
      } else {
        // Render leaf metrics
        return (
          <div key={metricName} className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium">
            <span>
              <div className="text-gray-400">{metricName}:</div>
            </span>
            <div className="text-gray-600">{metricValue}</div>
          </div>
        );
      }
    });
  };

  return (
    <div className="rounded-md border border-gray-100 bg-white drop-shadow">
      <div className="flex items-start justify-between p-4">
        {/* Desktop Metrics */}
        <div>
          <div className="text-lg font-bold mb-2">Desktop Metrics</div>
          {renderMetrics(desktop)}
        </div>
        {/* Mobile Metrics */}
        <div>
          <div className="text-lg font-bold mb-2">Mobile Metrics</div>
          {renderMetrics(mobile)}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
