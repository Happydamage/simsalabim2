import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { N10 } from './N10.tsx';

const cnTestBoard = cn('TestBoard');

interface TestBoardProps {
  className?: string;
}

export const TestBoard: FC<TestBoardProps> = (props) => {
  return (
    <div className={cnTestBoard(undefined, [props.className])}>
      <N10 />
    </div>
  );
};
