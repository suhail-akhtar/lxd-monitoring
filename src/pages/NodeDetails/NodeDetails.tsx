import React from 'react';
import { useParams } from 'react-router-dom';
import { Node } from '@/types/common';
import { NodeOverview } from '@/components/nodeDetails/NodeOverview';
import { NodeResourceCharts } from '@/components/nodeDetails/NodeResourceCharts';
import { NodeProcesses } from '@/components/nodeDetails/NodeProcesses';
import { NodeLogsEvents } from '@/components/nodeDetails/NodeLogsEvents';
import { NodeConfiguration } from '@/components/nodeDetails/NodeConfiguration';

export const NodeDetails: React.FC = () => {
  const { nodeId } = useParams<{ nodeId: string }>();

  // Mock data for a specific node. In a real application, you would fetch this from an API.
  const mockNodes: Node[] = [
    {
      id: 'node-01',
      name: 'node-01',
      status: 'healthy',
      cpuUsage: 45,
      memoryUsage: 62,
      storageUsage: 78,
      instances: 12,
      ipAddress: '192.168.1.101',
      os: 'Ubuntu 22.04 LTS',
      kernelVersion: '5.15.0-76-generic',
      uptime: '7 days, 3 hours',
      networkIn: '1.2 GB',
      networkOut: '800 MB',
      diskRead: '500 MB/s',
      diskWrite: '300 MB/s',
    },
    {
      id: 'node-02',
      name: 'node-02',
      status: 'healthy',
      cpuUsage: 32,
      memoryUsage: 54,
      storageUsage: 65,
      instances: 9,
      ipAddress: '192.168.1.102',
      os: 'Ubuntu 22.04 LTS',
      kernelVersion: '5.15.0-76-generic',
      uptime: '5 days, 10 hours',
      networkIn: '900 MB',
      networkOut: '600 MB',
      diskRead: '400 MB/s',
      diskWrite: '250 MB/s',
    },
    {
      id: 'node-03',
      name: 'node-03',
      status: 'warning',
      cpuUsage: 89,
      memoryUsage: 92,
      storageUsage: 71,
      instances: 15,
      ipAddress: '192.168.1.103',
      os: 'Ubuntu 22.04 LTS',
      kernelVersion: '5.15.0-76-generic',
      uptime: '12 days, 1 hour',
      networkIn: '2.5 GB',
      networkOut: '1.8 GB',
      diskRead: '700 MB/s',
      diskWrite: '450 MB/s',
    },
  ];

  const node = mockNodes.find(n => n.id === nodeId);

  if (!node) {
    return (
      <div className="p-6 text-center text-gray-600">
        <h1 className="text-3xl font-bold mb-4">Node Not Found</h1>
        <p>The node with ID "{nodeId}" could not be found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Node: {node.name}</h1>

      <NodeOverview node={node} />
      <NodeResourceCharts node={node} />
      <NodeProcesses node={node} />
      <NodeLogsEvents node={node} />
      <NodeConfiguration node={node} />
    </div>
  );
};
