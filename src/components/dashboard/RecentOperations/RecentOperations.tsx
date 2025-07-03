import React from 'react';
import { OperationItem } from './OperationItem';
import { Operation } from '@/types/common';

export const RecentOperations: React.FC = () => {
  const operations: Operation[] = [
    {
      id: 'op-1',
      description: 'Container web-server-03 started',
      timeAgo: '2 minutes ago',
      status: 'Success',
    },
    {
      id: 'op-2',
      description: 'VM backup-vm-01 migration in progress',
      timeAgo: '5 minutes ago',
      status: 'Running',
    },
    {
      id: 'op-3',
      description: 'Storage pool rebalancing scheduled',
      timeAgo: '10 minutes ago',
      status: 'Scheduled',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Operations</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {operations.map((op) => (
            <OperationItem key={op.id} operation={op} />
          ))}
        </div>
      </div>
    </div>
  );
};
