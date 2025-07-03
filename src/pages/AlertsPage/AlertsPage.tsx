import React from 'react';

export const AlertsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Alerts Management</h2>
      <p className="text-gray-700">This page will display all active and resolved alerts, with options to configure alert rules.</p>
    </div>
  );
};
