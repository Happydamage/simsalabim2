import { FC, Suspense } from 'react';
import { cn } from '@bem-react/classname';
import { CircularProgressCentered } from '../loaders/CircularProgressCentered/CircularProgressCentered.tsx';
import { Outlet } from 'react-router-dom';
import { CustomAppBar } from '../AppBar/CustomAppBar.tsx';
import './AppPage.scss';

const cnAppPage = cn('AppPage');

export const AppPage: FC = () => {
  return (
    <div className={cnAppPage()}>
      <CustomAppBar />

      <main className={cnAppPage('Main')}>
        <Suspense fallback={<CircularProgressCentered />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
