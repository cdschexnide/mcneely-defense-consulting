import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-tactical-gray/30 hover:bg-tactical-gray/50 transition-colors focus-ring"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-military-olive-light" />
      ) : (
        <Moon size={20} className="text-military-green" />
      )}
    </button>
  );
};
