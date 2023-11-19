'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider: React.FC<({ children: ReactNode })> = ({ children }) => {
  const [background, setBackground] = useState('lightgreen');

  return (
    <ThemeContext.Provider value={{ background, setBackground }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};
