import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';

export const MainLayout: React.FC = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main
        id="mainContent"
        className={cn(
          'pt-16 min-h-screen sidebar-transition',
          isSidebarOpen ? 'ml-64' : 'ml-0'
        )}
      >
        <Outlet />
      </main>
    </div>
  );
};
