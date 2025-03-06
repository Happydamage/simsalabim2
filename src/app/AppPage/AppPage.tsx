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
  ThemeProvider,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { darkTheme, lightTheme } from '../../ColorThemes/ColorThemes.ts';
import { observer } from 'mobx-react-lite';

const cnAppPage = cn('AppPage');

export const AppPage: FC = observer(() => {
  return (
    <ThemeProvider
      theme={localStorage.getItem('theme') === '1' ? darkTheme : lightTheme}
    >
      <Box
        className={cnAppPage()}
        border={'.5rem solid'}
        borderColor={darkTheme.palette.primary.main}
      >
        <CustomAppBar />

        <main className={cnAppPage('Main')}>
          <Suspense fallback={<CircularProgressCentered />}>
            <Outlet />

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography component="span">Accordion 1</Typography>
              </AccordionSummary>

              <AccordionDetails>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </AccordionDetails>
            </Accordion>
          </Suspense>
        </main>
      </Box>
    </ThemeProvider>
  );
});
