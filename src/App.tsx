import { createTheme, ThemeProvider } from '@mui/material';
import { AppRouter } from './app/router/AppRouter.tsx';
import './App.css';

const theme = createTheme({});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
