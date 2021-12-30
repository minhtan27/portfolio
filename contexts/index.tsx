import { createContext, FC, useContext, useState } from "react";

interface AppContextProps {
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export const AppProvider: FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  return useContext(AppContext);
};
