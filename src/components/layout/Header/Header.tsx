import React, { useEffect, useState } from 'react';
import { Menu, Bell, Cloud } from 'lucide-react';
import { useSidebar } from '@/hooks/useSidebar';
import { formatLastUpdatedTime } from '@/utils/dateUtils';

export const Header: React.FC = () => {
  const { toggleSidebar, lastUpdated, updateLastUpdated } = useSidebar();
  const [displayTime, setDisplayTime] = useState(formatLastUpdatedTime(lastUpdated));

  useEffect(() => {
    const interval = setInterval(() => {
      updateLastUpdated();
      setDisplayTime(formatLastUpdatedTime(new Date()));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [updateLastUpdated]);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              id="sidebarToggle"
              className="text-gray-500 hover:text-gray-700 mr-4"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <Cloud className="text-blue-600 text-2xl mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">LXD Microcloud Monitor</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="text-gray-500 hover:text-gray-700 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: <span id="lastUpdate" className="font-medium">{displayTime}</span>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
