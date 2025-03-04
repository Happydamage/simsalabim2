import { createTheme } from '@mui/material';
import { common, green, purple } from '@mui/material/colors';

export const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },

  palette: {
    mode: 'dark',
    primary: {
      main: common.black,
      dark: purple[900],
      light: green[800],
    },
  },
});
