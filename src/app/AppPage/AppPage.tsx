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
  ThemeProvider,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { darkTheme } from '../../ColorThemes/ColorThemes.ts';

interface Colors {
  color?: typeof colors;
}

const cnAppPage = cn('AppPage');

export const AppPage: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className={cnAppPage()}
        border={'.5rem solid' + `${darkTheme.palette.primary.dark}`}
      >
        <CustomAppBar />

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
};
