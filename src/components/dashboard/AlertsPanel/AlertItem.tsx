import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { Alert } from '@/types/common';
import { cn } from '@/lib/utils';

interface AlertItemProps {
  alert: Alert;
}

export const AlertItem: React.FC<AlertItemProps> = ({ alert }) => {
  const severityClasses: Record<Alert['severity'], string> = {
    Warning: 'bg-yellow-50 border-yellow-200 text-yellow-600',
    Critical: 'bg-red-50 border-red-200 text-red-600',
    Info: 'bg-blue-50 border-blue-200 text-blue-600',
  };

  const iconMap: Record<Alert['severity'], React.ElementType> = {
    Warning: AlertTriangle,
    Critical: AlertCircle,
    Info: Info,
  };

  const IconComponent = iconMap[alert.severity];

  return (
    <div className={cn('flex items-center p-3 border rounded-lg', severityClasses[alert.severity])}>
      <IconComponent className={cn("mr-3 h-5 w-5", alert.severity === 'Warning' ? 'text-yellow-500' : alert.severity === 'Critical' ? 'text-red-500' : 'text-blue-500')} />
      <div className="flex-1">
        <p className="font-medium text-gray-900">{alert.title}</p>
        <p className="text-sm text-gray-600">{alert.description}</p>
      </div>
      <span className="font-medium text-sm">{alert.severity}</span>
    </div>
  );
};
