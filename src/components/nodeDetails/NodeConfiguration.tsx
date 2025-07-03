import React from 'react';
import { Node } from '@/types/common';
import { Settings, HardDrive, Network, Cpu } from 'lucide-react';

interface NodeConfigurationProps {
  node: Node;
}

export const NodeConfiguration: React.FC<NodeConfigurationProps> = ({ node }) => {
  // Mock configuration data
  const config = {
    'Operating System': node.os || 'N/A',
    'Kernel Version': node.kernelVersion || 'N/A',
    'CPU Cores': 8, // Mock
    'Total Memory': '32 GB', // Mock
    'Total Storage': '1 TB', // Mock
    'Network Interfaces': 'eth0, eth1', // Mock
    'Virtualization Type': 'KVM', // Mock
    'Last Reboot': '2023-10-26 10:00:00', // Mock
  };

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Configuration Details</h3>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(config).map(([key, value]) => (
          <div key={key} className="flex items-center">
            <Settings className="h-5 w-5 text-gray-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">{key}</p>
              <p className="text-base font-medium text-gray-900">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
