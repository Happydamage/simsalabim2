import { useEffect, useState } from 'react';
import { Theme } from '@mui/material';
import { darkTheme, lightTheme } from './theme.ts';

const storedTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    return darkTheme;
  } else {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (storedTheme === null && prefersDarkMode) {
      return darkTheme;
    }
  }
  return lightTheme;
};

export const useTheme = (): [Theme, () => void] => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => storedTheme());

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme');
  //   if (storedTheme === 'dark') {
  //     setCurrentTheme(darkTheme);
  //   } else {
  //     const prefersDarkMode = window.matchMedia(
  //       '(prefers-color-scheme: dark)'
  //     ).matches;
  //     if (storedTheme === null && prefersDarkMode) {
  //       setCurrentTheme(darkTheme);
  //     }
  //   }
  // }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light');
  };

  return [currentTheme, toggleTheme];
};
