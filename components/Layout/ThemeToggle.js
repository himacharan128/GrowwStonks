import * as React from "react";
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

const toggleMode = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark');
}
  return (
    <button
      className={`bg-gray-700 text-white p-2 rounded ${
        theme === "light" ? "bg-orange-400" : "bg-indigo-400"
      }`}
      onClick={toggleMode} 
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>

  );
}

export default ThemeToggle;