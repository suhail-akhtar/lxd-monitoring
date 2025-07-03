import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  lastUpdated: Date;
  updateLastUpdated: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const updateLastUpdated = () => {
    setLastUpdated(new Date());
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar, lastUpdated, updateLastUpdated }}>
      {children}
    </AppContext.Provider>
  );
};
