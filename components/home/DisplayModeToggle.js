"use client"

import * as React from "react";
import { useTheme } from "next-themes";

const DisplayModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button className={`bg-gray-700 text-white p-2 rounded ${
      theme ? 'bg-indigo-400' : 'bg-orange-400'
    }`} onClick={toggleMode}>
      {theme === "light" ? ( 'Dark' ) : ( 'Light' )}
    </button>
  );
}

export default DisplayModeToggle




// import React, { useState, useEffect } from 'react';

// const DisplayModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };
//   return (
//     <div>
//       <button
        // className={`bg-gray-700 text-white p-2 rounded ${
        //   isDarkMode ? 'bg-yellow-400' : 'bg-indigo-400'
        // }`}
//         onClick={toggleDarkMode}
//       >
//         {isDarkMode ? 'LightMode' : 'DarkMode'}
//       </button>
//     </div>
//   );
// };

// export default DisplayModeToggle;