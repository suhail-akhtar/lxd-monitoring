import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export const useSidebar = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useSidebar must be used within an AppProvider');
  }
  return context;
};
