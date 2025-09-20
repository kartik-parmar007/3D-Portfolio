import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative glass-effect border-0 hover:bg-accent/20"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'light' ? 0 : 180,
          scale: theme === 'light' ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="h-4 w-4" />
      </motion.div>
    </Button>
  );
};