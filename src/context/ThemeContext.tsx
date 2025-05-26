'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeMap, ThemeKey } from '@/styles/theme';

interface ThemeContextType {
  themeKey: ThemeKey;
  setThemeKey: React.Dispatch<React.SetStateAction<ThemeKey>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeKey, setThemeKey] = useState<ThemeKey>('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeKey') as ThemeKey;
    if (savedTheme && themeMap[savedTheme]) {
      setThemeKey(savedTheme);
    }
  }, []);

  const theme = themeMap[themeKey];

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
