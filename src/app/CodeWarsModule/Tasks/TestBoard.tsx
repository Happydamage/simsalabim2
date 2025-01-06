import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Lc1 } from '../../LitCode/Lc-1.tsx';

const cnTestBoard = cn('TestBoard');

interface TestBoardProps {
  className?: string;
}

export const TestBoard: FC<TestBoardProps> = (props) => {
  return (
    <div className={cnTestBoard(undefined, [props.className])}>
      <Lc1 />
    </div>
  );
};
