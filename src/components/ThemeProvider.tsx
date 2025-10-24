import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeContextType = {
  theme: Theme;
  effectiveTheme: 'dark' | 'light';
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first, default to system theme
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    return savedTheme || 'system';
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'dark' | 'light'>('dark');

  // Get system preference
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Update effective theme based on current theme setting
  useEffect(() => {
    const newEffectiveTheme = theme === 'system' ? getSystemTheme() : theme;
    setEffectiveTheme(newEffectiveTheme);
    
    // Apply theme to document root
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newEffectiveTheme);
    
    // Add transition class for smooth theme switching
    document.documentElement.classList.add('theme-transition');
    const transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
    
    return () => clearTimeout(transitionTimeout);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const newEffectiveTheme = getSystemTheme();
        setEffectiveTheme(newEffectiveTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newEffectiveTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Save theme preference to localStorage
  useEffect(() => {
    if (theme !== 'system') {
      localStorage.setItem('portfolio-theme', theme);
    } else {
      localStorage.removeItem('portfolio-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'dark';
      // If system, toggle to opposite of current effective theme
      return effectiveTheme === 'dark' ? 'light' : 'dark';
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};