import { colors, createTheme } from '@mui/material';
import { amber, green, purple } from '@mui/material/colors';

interface Colors {
  color?: typeof colors;
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[800],
      dark: purple[900],
      light: green[800],
    },
    secondary: {
      main: amber[500],
      dark: purple[500],
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const orangeTheme = createTheme({
  palette: {
    primary: {
      main: amber[900],
    },
  },
});
