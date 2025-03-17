import { FC, Suspense, useState } from 'react';
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
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import { ThemeProviderWrapper } from '../../ThemeModule/ThemeContext.tsx';
import { CustomModal } from '../Ulbi/Modal/CustomModal.tsx';

const cnAppPage = cn('AppPage');

export const AppPage: FC = observer(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProviderWrapper>
      <Box
        className={cnAppPage()}
        border={'.5rem solid'}
        borderColor={(theme) => theme.palette.primary.main}
        bgcolor={(theme) => theme.palette.secondary.main}
      >
        <CustomAppBar />

        <main className={cnAppPage('Main')}>
          <Suspense fallback={<CircularProgressCentered />}>
            <Outlet />
          </Suspense>
        </main>
      </Box>
    </ThemeProviderWrapper>
  );
});
