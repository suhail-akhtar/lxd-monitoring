import React from 'react';
import { Node } from '@/types/common';
import { Terminal, AlertTriangle, Info } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface NodeLogsEventsProps {
  node: Node;
}

interface LogEvent {
  id: string;
  timestamp: Date;
  type: 'log' | 'event' | 'alert';
  severity: 'info' | 'warning' | 'error';
  message: string;
}

export const NodeLogsEvents: React.FC<NodeLogsEventsProps> = ({ node }) => {
  // Mock data for recent logs and events
  const mockLogsEvents: LogEvent[] = [
    { id: 'l1', timestamp: new Date(Date.now() - 1000 * 60 * 5), type: 'log', severity: 'info', message: 'System heartbeat detected.' },
    { id: 'l2', timestamp: new Date(Date.now() - 1000 * 60 * 15), type: 'event', severity: 'warning', message: 'High CPU usage detected for 5 minutes.' },
    { id: 'l3', timestamp: new Date(Date.now() - 1000 * 60 * 30), type: 'log', severity: 'info', message: 'Disk I/O operations normal.' },
    { id: 'l4', timestamp: new Date(Date.now() - 1000 * 60 * 60), type: 'alert', severity: 'error', message: 'Critical: Node memory usage exceeded 90% for 10 minutes.' },
    { id: 'l5', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), type: 'log', severity: 'info', message: 'Network interface eth0 status: UP.' },
  ].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()); // Sort by most recent

  const getSeverityClass = (severity: LogEvent['severity']) => {
    switch (severity) {
      case 'info': return 'text-blue-600 bg-blue-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'error': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getIcon = (type: LogEvent['type'], severity: LogEvent['severity']) => {
    if (type === 'alert' || severity === 'error') return <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />;
    if (severity === 'warning') return <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />;
    if (type === 'event') return <Info className="h-5 w-5 text-blue-500 mr-2" />;
    return <Terminal className="h-5 w-5 text-gray-500 mr-2" />;
  };

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Logs & Events</h3>
      </div>
      <div className="p-6">
        {mockLogsEvents.length > 0 ? (
          <div className="space-y-4">
            {mockLogsEvents.map((item) => (
              <div key={item.id} className="flex items-start p-3 rounded-md border border-gray-100">
                {getIcon(item.type, item.severity)}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className={cn('px-1.5 py-0.5 rounded-full text-xs font-medium mr-2', getSeverityClass(item.severity))}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No recent logs or events.</p>
        )}
      </div>
    </div>
  );
};
