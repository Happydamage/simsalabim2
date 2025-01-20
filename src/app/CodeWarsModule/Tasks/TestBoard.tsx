import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Lc2 } from '../../LeetCode/Lc2.tsx';

const cnTestBoard = cn('TestBoard');

interface TestBoardProps {
  className?: string;
}

export const TestBoard: FC<TestBoardProps> = (props) => {
  return (
    <div className={cnTestBoard(undefined, [props.className])}>
      <Lc2 />
    </div>
  );
};
