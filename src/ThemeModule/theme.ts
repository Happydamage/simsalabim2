import { colors, createTheme } from '@mui/material';
import { amber, cyan, grey } from '@mui/material/colors';

interface Colors {
  color?: typeof colors;
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[800],
    },
    secondary: {
      main: grey[700],
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    secondary: {
      main: cyan[50],
    },
  },
});
