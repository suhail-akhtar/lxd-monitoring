import React from 'react';
import { Node } from '@/types/common';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { HardDrive, MemoryStick, Cpu } from 'lucide-react';

interface NodeProcessesProps {
  node: Node;
}

interface Process {
  id: string;
  name: string;
  cpu: number;
  memory: number;
  status: string;
}

export const NodeProcesses: React.FC<NodeProcessesProps> = ({ node }) => {
  // Mock data for processes/containers
  const mockProcesses: Process[] = [
    { id: 'p1', name: 'nginx-web-server', cpu: 5.2, memory: 128, status: 'Running' },
    { id: 'p2', name: 'database-service', cpu: 15.8, memory: 512, status: 'Running' },
    { id: 'p3', name: 'app-backend', cpu: 8.1, memory: 256, status: 'Running' },
    { id: 'p4', name: 'monitoring-agent', cpu: 1.5, memory: 64, status: 'Running' },
    { id: 'p5', name: 'log-collector', cpu: 2.3, memory: 96, status: 'Running' },
  ];

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Running Processes / Containers</h3>
      </div>
      <div className="p-6">
        {mockProcesses.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">CPU (%)</TableHead>
                <TableHead className="text-right">Memory (MB)</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProcesses.map((process) => (
                <TableRow key={process.id}>
                  <TableCell className="font-medium">{process.name}</TableCell>
                  <TableCell className="text-right">{process.cpu.toFixed(1)}</TableCell>
                  <TableCell className="text-right">{process.memory}</TableCell>
                  <TableCell>{process.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-500 text-center py-4">No running processes or containers found.</p>
        )}
      </div>
    </div>
  );
};
