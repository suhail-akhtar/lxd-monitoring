import React from 'react';
import { Node } from '@/types/common';
import { cn } from '@/lib/utils';
import { Cpu, HardDrive, Brain, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface NodeCardProps {
  node: Node;
}

export const NodeCard: React.FC<NodeCardProps> = ({ node }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const statusClasses = {
    healthy: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    critical: 'bg-red-100 text-red-800',
  };

  const getProgressBarColor = (usage: number) => {
    if (usage > 80) return 'bg-red-500';
    if (usage > 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleCardClick = () => {
    navigate(`/nodes/${node.id}`); // Navigate to the detailed node page
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow duration-200" // Add cursor-pointer and hover effects
      onClick={handleCardClick} // Add onClick handler
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900">{node.name}</h4>
        <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-medium', statusClasses[node.status])}>
          {node.status.charAt(0).toUpperCase() + node.status.slice(1)}
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Server className="h-4 w-4 mr-2 text-gray-500" />
          <span>{node.instances} Instances</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Cpu className="h-4 w-4 mr-2 text-gray-500" />
          <span>CPU: {node.cpuUsage}%</span>
          <div className="w-full bg-gray-200 rounded-full h-1.5 ml-2">
            <div
              className={cn('h-1.5 rounded-full', getProgressBarColor(node.cpuUsage))}
              style={{ width: `${node.cpuUsage}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Brain className="h-4 w-4 mr-2 text-gray-500" />
          <span>Memory: {node.memoryUsage}%</span>
          <div className="w-full bg-gray-200 rounded-full h-1.5 ml-2">
            <div
              className={cn('h-1.5 rounded-full', getProgressBarColor(node.memoryUsage))}
              style={{ width: `${node.memoryUsage}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <HardDrive className="h-4 w-4 mr-2 text-gray-500" />
          <span>Storage: {node.storageUsage}%</span>
          <div className="w-full bg-gray-200 rounded-full h-1.5 ml-2">
            <div
              className={cn('h-1.5 rounded-full', getProgressBarColor(node.storageUsage))}
              style={{ width: `${node.storageUsage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
