import React from 'react';
import { AlertItem } from './AlertItem';
import { Alert } from '@/types/common';

export const AlertsPanel: React.FC = () => {
  const alerts: Alert[] = [
    {
      id: 'alert-1',
      title: 'High CPU usage on node-03',
      description: 'CPU usage has exceeded 85% for the last 10 minutes',
      severity: 'Warning',
    },
    {
      id: 'alert-2',
      title: 'Storage pool approaching capacity',
      description: "Pool 'default' is 91% full on node-03",
      severity: 'Critical',
    },
    {
      id: 'alert-3',
      title: 'Cluster rebalancing recommended',
      description: 'Load distribution could be optimized',
      severity: 'Info',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Active Alerts</h3>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <AlertItem key={alert.id} alert={alert} />
          ))}
        </div>
      </div>
    </div>
  );
};
