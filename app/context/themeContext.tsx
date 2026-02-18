import React, { createContext, useContext, useEffect, useReducer,useState } from 'react';

const ThemeContext = createContext();


function ThemeProvider({ children }) {
    

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext,ThemeProvider}