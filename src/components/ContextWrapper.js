import React from 'react';

import { useState } from "react";
import { DarkModeContext } from '@/hooks/darkModeContext';

export default props => {
  const [darkMode, setDarkMode] = useState(false);
 
  function toggleDarkMode() {
    setDarkMode(darkMode => !darkMode);
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}> 
        {props.children}
    </DarkModeContext.Provider>
  );
};