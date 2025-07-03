import React, { useEffect } from 'react';
import { ClusterOverview } from '@/components/dashboard/ClusterOverview';
import { ResourceCharts } from '@/components/dashboard/ResourceCharts';
import { NodeStatus } from '@/components/dashboard/NodeStatus';
import { RecentOperations } from '@/components/dashboard/RecentOperations';
import { AlertsPanel } from '@/components/dashboard/AlertsPanel';
import { useSidebar } from '@/hooks/useSidebar';

export const Dashboard: React.FC = () => {
  const { updateLastUpdated } = useSidebar();

  useEffect(() => {
    // Simulate real-time updates for some metrics
    const interval = setInterval(() => {
      // In a real app, you'd fetch new data here
      // For now, we'll just trigger a last updated time update
      updateLastUpdated();
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [updateLastUpdated]);

  return (
    <div className="p-6">
      <ClusterOverview />
      <ResourceCharts />
      <NodeStatus />
      <RecentOperations />
      <AlertsPanel />
    </div>
  );
};
