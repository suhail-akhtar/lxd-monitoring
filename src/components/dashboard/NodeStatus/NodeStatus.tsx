import React from 'react';
import { NodeCard } from './NodeCard';
import { Node } from '@/types/common';

export const NodeStatus: React.FC = () => {
  const nodes: Node[] = [
    {
      id: 'node-01',
      name: 'node-01',
      status: 'healthy',
      cpuUsage: 45,
      memoryUsage: 62,
      storageUsage: 78,
      instances: 12,
    },
    {
      id: 'node-02',
      name: 'node-02',
      status: 'healthy',
      cpuUsage: 32,
      memoryUsage: 54,
      storageUsage: 65,
      instances: 9,
    },
    {
      id: 'node-03',
      name: 'node-03',
      status: 'warning',
      cpuUsage: 89,
      memoryUsage: 92,
      storageUsage: 71,
      instances: 15,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Node Status</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodes.map((node) => (
            <NodeCard key={node.id} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
};
