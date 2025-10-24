import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

export const ThemeToggle: React.FC = () => {
  const { theme, effectiveTheme, toggleTheme, setTheme } = useTheme();

  const handleToggle = () => {
    // If currently using system preference, set to the opposite of the current effective theme
    if (theme === 'system') {
      setTheme(effectiveTheme === 'dark' ? 'light' : 'dark');
    } else {
      toggleTheme();
    }
  };

  const isDark = theme === 'dark' || (theme === 'system' && effectiveTheme === 'dark');

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="relative glass-effect border-0 hover:bg-accent/20 transition-all duration-300"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ opacity: 0, rotate: isDark ? 90 : -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: isDark ? -90 : 90 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </motion.div>
    </Button>
  );
};