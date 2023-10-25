"use client"

import React, { useState, useEffect } from 'react';

const DisplayModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button
        className={`bg-gray-700 text-white p-2 rounded ${
          isDarkMode ? 'bg-yellow-400' : 'bg-indigo-400'
        }`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DisplayModeToggle;
