import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { N5 } from './N5.tsx';

const cnTestBoard = cn('TestBoard');

interface TestBoardProps {
  className?: string;
}

export const TestBoard: FC<TestBoardProps> = (props) => {
  return (
    <div className={cnTestBoard(undefined, [props.className])}>
      <N5 />
    </div>
  );
};
