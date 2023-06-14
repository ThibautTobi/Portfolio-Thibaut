import { useState, useEffect } from "react";

function useThemeClass() {
  const [theme, setTheme] = useState('light-theme');

  function toggleTheme () {
    console.log(theme)
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  };

  useEffect(() => {
     document.body.className = theme;
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
}
export default useThemeClass;