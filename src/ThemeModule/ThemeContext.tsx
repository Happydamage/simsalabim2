import { createContext, FC, ReactNode } from 'react';
import { Theme, ThemeProvider } from '@mui/material';
import { useTheme } from './useTheme.ts';

interface ThemeContextProps {
  className?: string;
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProviderWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
