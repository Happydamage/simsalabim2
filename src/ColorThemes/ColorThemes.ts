import { createTheme } from '@mui/material';
import { common, green, purple } from '@mui/material/colors';

// export const darkTheme = createTheme({
//   colorSchemes: {
//     dark: true,
//   },
//
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: common.black,
//       dark: purple[900],
//       light: green[800],
//     },
//   },
// });
//
// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: common.black,
    //   dark: purple[900],
    //   light: green[800],
    // },
  },
});
