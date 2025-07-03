import React from 'react';
import {
  LayoutDashboard, Server, Box, Monitor, HardDrive, Network, ListChecks,
  AlertTriangle, FileText, Settings
} from 'lucide-react';
import { useSidebar } from '@/hooks/useSidebar';
import { SidebarItem } from './SidebarItem';
import { cn } from '@/lib/utils';

export const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <aside
      id="sidebar"
      className={cn(
        'fixed left-0 top-16 h-full w-64 bg-white shadow-sm border-r border-gray-200 sidebar-transition z-40',
        { '-translate-x-full': !isSidebarOpen }
      )}
    >
      <div className="p-4">
        <nav className="space-y-2">
          <SidebarItem to="/" icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem to="/cluster" icon={Server} label="Cluster Nodes" />
          <SidebarItem to="/containers" icon={Box} label="Containers" />
          <SidebarItem to="/virtual-machines" icon={Monitor} label="Virtual Machines" />
          <SidebarItem to="/storage" icon={HardDrive} label="Storage" />
          <SidebarItem to="/network" icon={Network} label="Network" />
          <SidebarItem to="/operations" icon={ListChecks} label="Operations" />
          <SidebarItem to="/alerts" icon={AlertTriangle} label="Alerts" />
          <SidebarItem to="/logs" icon={FileText} label="Logs" />
          <SidebarItem to="/settings" icon={Settings} label="Settings" />
        </nav>
      </div>
    </aside>
  );
};
