import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number; // Percentage value (0-100)
  colorClass?: string; // Tailwind class for the progress bar color, e.g., 'bg-blue-600'
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, colorClass = 'bg-blue-600', className }) => {
  return (
    <div className={cn('w-full bg-gray-200 rounded-full h-2', className)}>
      <div
        className={cn('h-2 rounded-full', colorClass)}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
