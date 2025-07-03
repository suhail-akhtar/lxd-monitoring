import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon: Icon, label }) => {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center p-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200',
        // Add active link styling if needed, e.g., using useLocation hook
        // { 'bg-blue-50 text-blue-700': location.pathname === to }
      )}
    >
      <Icon className="h-5 w-5 mr-3 text-gray-500" />
      <span>{label}</span>
    </Link>
  );
};
