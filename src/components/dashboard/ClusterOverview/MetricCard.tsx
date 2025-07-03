import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn utility is available

interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon; // Type for Lucide icons
  iconBgClass: string;
  valueColorClass: string;
  description?: string;
  status?: 'healthy' | 'warning' | 'critical' | 'info';
  progressBarValue?: number;
  progressBarColorClass?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon, // Destructure and rename icon to Icon to use as a component
  iconBgClass,
  valueColorClass,
  description,
  status,
  progressBarValue,
  progressBarColorClass,
}) => {
  const statusClasses = {
    healthy: 'text-green-600',
    warning: 'text-yellow-600',
    critical: 'text-red-600',
    info: 'text-blue-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className={cn('rounded-full p-3', iconBgClass)}>
          <Icon className="h-6 w-6 text-gray-700" /> {/* Render Icon as a component */}
        </div>
        {status && (
          <span className={cn('text-xs font-medium px-2.5 py-0.5 rounded-full', statusClasses[status])}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <p className={cn('text-3xl font-bold mb-3', valueColorClass)}>{value}</p>
      {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
      {progressBarValue !== undefined && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={cn('h-2.5 rounded-full', progressBarColorClass)}
            style={{ width: `${progressBarValue}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};
