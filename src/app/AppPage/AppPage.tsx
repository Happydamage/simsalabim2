import { FC, Suspense } from 'react';
import { cn } from '@bem-react/classname';
import { CircularProgressCentered } from '../loaders/CircularProgressCentered/CircularProgressCentered.tsx';
import { Outlet } from 'react-router-dom';
import { CustomAppBar } from '../AppBar/CustomAppBar.tsx';
import './AppPage.scss';
import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ThemeProviderWrapper } from '../../ThemeModule/ThemeContext.tsx';
import { getByKey } from '../../../TypeScript/Types/typeof-keyof/typeof-keyof.ts';
import { routes } from '../router/routes.ts';

const cnAppPage = cn('AppPage');

export const AppPage: FC = observer(() => {
  console.log(getByKey(routes, 'codeWars'));

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
