export type Status = 'healthy' | 'warning' | 'critical' | 'unknown';

export interface Metric {
  label: string;
  value: string;
  icon: React.ElementType;
  iconBgClass: string; // Added iconBgClass
  valueColorClass: string; // Added valueColorClass
  description?: string;
  status?: Status; // Added status
  progressBarValue?: number;
  progressBarColorClass?: string; // Added progressBarColorClass
}

export interface Node {
  id: string;
  name: string;
  status: Status;
  cpuUsage: number;
  memoryUsage: number;
  storageUsage: number;
  instances: number;
  // Added properties for detailed view
  ipAddress?: string;
  os?: string;
  kernelVersion?: string;
  uptime?: string;
  networkIn?: string;
  networkOut?: string;
  diskRead?: string;
  diskWrite?: string;
}

export type OperationStatus = 'Success' | 'Running' | 'Scheduled' | 'Failed';

export interface Operation {
  id: string;
  description: string;
  timeAgo: string;
  status: OperationStatus;
}

export type AlertSeverity = 'Warning' | 'Critical' | 'Info';

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: AlertSeverity;
}
