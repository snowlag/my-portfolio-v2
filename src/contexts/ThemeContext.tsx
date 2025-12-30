import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from '../styles/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-theme-mode';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Default to light
    return 'light';
  });

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (!savedTheme) {
        setThemeMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    
    // Update document class for potential CSS-based dark mode support
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

