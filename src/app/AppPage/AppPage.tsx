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
          <Button onClick={() => setIsOpen(true)}>Toggle</Button>
          <CustomModal
            className={cnAppPage('Modal')}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            {"border={'.5rem solid'}\n" +
              'borderColor={(theme) => theme.palette.primary.main}\n' +
              'bgcolor={(theme) => theme.palette.secondary.main}'}
          </CustomModal>
        </main>
      </Box>
    </ThemeProviderWrapper>
  );
});
