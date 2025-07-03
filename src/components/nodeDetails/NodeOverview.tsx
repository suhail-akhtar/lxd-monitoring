import React from 'react';
import { Node } from '@/types/common';
import { cn } from '@/lib/utils';
import { Server, Globe, Clock, HardDrive, Cpu, Brain } from 'lucide-react';

interface NodeOverviewProps {
  node: Node;
}

export const NodeOverview: React.FC<NodeOverviewProps> = ({ node }) => {
  const statusClasses = {
    healthy: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    critical: 'bg-red-100 text-red-800',
    unknown: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Overview</h3>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center">
          <Server className="h-5 w-5 text-gray-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <span className={cn('px-2.5 py-0.5 rounded-full text-sm font-medium', statusClasses[node.status])}>
              {node.status.charAt(0).toUpperCase() + node.status.slice(1)}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <Globe className="h-5 w-5 text-gray-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">IP Address</p>
            <p className="text-base font-medium text-gray-900">{node.ipAddress || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-gray-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Uptime</p>
            <p className="text-base font-medium text-gray-900">{node.uptime || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Cpu className="h-5 w-5 text-gray-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Operating System</p>
            <p className="text-base font-medium text-gray-900">{node.os || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Brain className="h-5 w-5 text-gray-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Kernel Version</p>
            <p className="text-base font-medium text-gray-900">{node.kernelVersion || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Server className="h-5 w-5 text-gray-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Running Instances</p>
            <p className="text-base font-medium text-gray-900">{node.instances}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
