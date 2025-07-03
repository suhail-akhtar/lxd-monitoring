import React from 'react';
import { MetricCard } from './MetricCard';
import { HeartPulse, Server, Play, Cpu } from 'lucide-react'; // Changed Microchip to Cpu
import { Metric } from '@/types/common';

export const ClusterOverview: React.FC = () => {
  const metrics: Metric[] = [
    {
      label: 'Cluster Health',
      value: 'Healthy',
      icon: HeartPulse,
      iconBgClass: 'bg-green-100',
      valueColorClass: 'text-green-600',
      description: 'All nodes operational',
      status: 'healthy',
    },
    {
      label: 'Total Nodes',
      value: '5',
      icon: Server,
      iconBgClass: 'bg-blue-100',
      description: '100% online',
      valueColorClass: 'text-gray-900',
    },
    {
      label: 'Running Instances',
      value: '47',
      icon: Play,
      iconBgClass: 'bg-purple-100',
      description: '32 containers, 15 VMs',
      valueColorClass: 'text-gray-900',
    },
    {
      label: 'CPU Usage',
      value: '67%',
      icon: Cpu, // Changed Microchip to Cpu
      iconBgClass: 'bg-orange-100',
      valueColorClass: 'text-orange-600',
      progressBarValue: 67,
      progressBarColorClass: 'bg-orange-600',
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Cluster Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.label}
            value={metric.value}
            icon={metric.icon}
            iconBgClass={metric.iconBgClass}
            valueColorClass={metric.valueColorClass}
            description={metric.description}
            status={metric.status}
            progressBarValue={metric.progressBarValue}
            progressBarColorClass={metric.progressBarColorClass}
          />
        ))}
      </div>
    </div>
  );
};
