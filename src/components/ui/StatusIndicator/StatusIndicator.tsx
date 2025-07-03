import React from 'react';
import { cn } from '@/lib/utils';
import { Status } from '@/types/common';

interface StatusIndicatorProps {
  status: Status;
  className?: string;
}

const statusMap: Record<Status, string> = {
  healthy: 'bg-green-500',
  warning: 'bg-yellow-500',
  critical: 'bg-red-500',
  unknown: 'bg-gray-500',
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, className }) => {
  return (
    <span
      className={cn(
        'status-indicator w-3 h-3 rounded-full inline-block mr-2',
        statusMap[status],
        className
      )}
    />
  );
};
