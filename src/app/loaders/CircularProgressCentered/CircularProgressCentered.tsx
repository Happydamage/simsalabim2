import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { CircularProgress } from '@mui/material';

import './styles/CircularProgressCentered.scss';

const cnCircularProgressCentered = cn('CircularProgressCentered');

interface CircularProgressCenteredProps {
  className?: string;
}

export const CircularProgressCentered: FC<CircularProgressCenteredProps> = (
  props
) => {
  return (
    <div className={cnCircularProgressCentered(undefined, [props.className])}>
      <CircularProgress />
    </div>
  );
};
