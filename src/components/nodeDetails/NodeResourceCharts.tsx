import React from 'react';
import { Node } from '@/types/common';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface NodeResourceChartsProps {
  node: Node;
}

export const NodeResourceCharts: React.FC<NodeResourceChartsProps> = ({ node }) => {
  const labels = ['1h ago', '30m ago', '15m ago', '5m ago', 'Now'];

  const cpuData = {
    labels,
    datasets: [
      {
        label: 'CPU Usage (%)',
        data: [node.cpuUsage - 10, node.cpuUsage - 5, node.cpuUsage + 2, node.cpuUsage - 3, node.cpuUsage],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const memoryData = {
    labels,
    datasets: [
      {
        label: 'Memory Usage (%)',
        data: [node.memoryUsage - 8, node.memoryUsage - 3, node.memoryUsage + 5, node.memoryUsage - 2, node.memoryUsage],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const networkData = {
    labels,
    datasets: [
      {
        label: 'Network In (MB/s)',
        data: [10, 15, 12, 18, 20], // Mock data
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Network Out (MB/s)',
        data: [5, 8, 7, 10, 12], // Mock data
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const diskData = {
    labels,
    datasets: [
      {
        label: 'Disk Read (MB/s)',
        data: [20, 25, 22, 28, 30], // Mock data
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Disk Write (MB/s)',
        data: [10, 12, 11, 14, 15], // Mock data
        borderColor: 'rgb(201, 203, 207)',
        backgroundColor: 'rgba(201, 203, 207, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Resource Usage',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // For CPU/Memory percentage
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Resource Utilization</h3>
      </div>
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="text-md font-medium text-gray-800 mb-4">CPU Usage Over Time</h4>
          <Line options={{ ...options, scales: { y: { beginAtZero: true, max: 100 } } }} data={cpuData} />
        </div>
        <div>
          <h4 className="text-md font-medium text-gray-800 mb-4">Memory Usage Over Time</h4>
          <Line options={{ ...options, scales: { y: { beginAtZero: true, max: 100 } } }} data={memoryData} />
        </div>
        <div>
          <h4 className="text-md font-medium text-gray-800 mb-4">Network I/O Over Time</h4>
          <Line options={{ ...options, scales: { y: { beginAtZero: true, max: undefined } } }} data={networkData} />
        </div>
        <div>
          <h4 className="text-md font-medium text-gray-800 mb-4">Disk I/O Over Time</h4>
          <Line options={{ ...options, scales: { y: { beginAtZero: true, max: undefined } } }} data={diskData} />
        </div>
      </div>
    </div>
  );
};
