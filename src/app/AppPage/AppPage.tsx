import { FC, Suspense } from 'react';
import { cn } from '@bem-react/classname';
import { CircularProgressCentered } from '../loaders/CircularProgressCentered/CircularProgressCentered.tsx';
import { Outlet } from 'react-router-dom';
import { CustomAppBar } from '../AppBar/CustomAppBar.tsx';
import './AppPage.scss';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  colors,
  FormControlLabel,
  Switch,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { darkTheme } from '../../ColorThemes/ColorThemes.ts';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../../ColorThemes/ThemeStore/ThemeStore.ts';
// import { ThemeStore } from '../../ColorThemes/ThemeStore/ThemeStore.ts';

interface Colors {
  color?: typeof colors;
}

const cnAppPage = cn('AppPage');

export const AppPage: FC = observer(() => {
  console.log(themeStore.theme.palette.mode);
  return (
    // <ThemeProvider theme={ThemeStore.theme}>
    <ThemeProvider theme={themeStore.theme}>
      <Box
        className={cnAppPage()}
        border={'.5rem solid' + `${darkTheme.palette.primary.dark}`}
      >
        <CustomAppBar />
        <FormControlLabel
          control={
            <Switch
              checked={themeStore.theme.palette.mode === 'dark'}
              onChange={() => themeStore.toggleTheme()}
            />
          }
          label={
            themeStore.theme.palette.mode === 'dark'
              ? 'Dark Mode'
              : 'Light Mode'
          }
        />
        <Button variant={'contained'} onClick={() => themeStore.toggleTheme}>
          123
        </Button>
        <main className={cnAppPage('Main')}>
          <Suspense fallback={<CircularProgressCentered />}>
            <Outlet />
            <Button variant={'contained'}>123123123</Button>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography component="span">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>Qwerty</AccordionDetails>
            </Accordion>
          </Suspense>
        </main>
      </Box>
    </ThemeProvider>
  );
});
