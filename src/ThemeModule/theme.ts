import { colors, createTheme } from '@mui/material';
import { amber } from '@mui/material/colors';

interface Colors {
  color?: typeof colors;
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[800],
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
