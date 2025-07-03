import React from 'react';
import { CPUChart } from './CPUChart';
import { MemoryChart } from './MemoryChart';

export const ResourceCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">CPU Usage (Last 24 Hours)</h3>
        <CPUChart />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Memory Usage (Last 24 Hours)</h3>
        <MemoryChart />
      </div>
    </div>
  );
};
