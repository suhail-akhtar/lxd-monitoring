import React from 'react';
import { Operation } from '@/types/common';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, PlayCircle } from 'lucide-react';

interface OperationItemProps {
  operation: Operation;
}

export const OperationItem: React.FC<OperationItemProps> = ({ operation }) => {
  const statusIcon = {
    Success: <CheckCircle className="h-5 w-5 text-green-500" />,
    Running: <PlayCircle className="h-5 w-5 text-blue-500" />,
    Scheduled: <Clock className="h-5 w-5 text-yellow-500" />,
    // Add other statuses as needed
  };

  const statusTextClass = {
    Success: 'text-green-600',
    Running: 'text-blue-600',
    Scheduled: 'text-yellow-600',
  };

  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
      <div className="flex-shrink-0">
        {statusIcon[operation.status as keyof typeof statusIcon] || <Clock className="h-5 w-5 text-gray-500" />}
      </div>
      <div className="flex-grow">
        <p className="text-gray-800 font-medium">{operation.description}</p>
        <p className="text-sm text-gray-500">{operation.timeAgo}</p>
      </div>
      <div className="flex-shrink-0">
        <span className={cn('text-sm font-semibold', statusTextClass[operation.status as keyof typeof statusTextClass])}>
          {operation.status}
        </span>
      </div>
    </div>
  );
};
