import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);

export default App;
