import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { N3 } from './forEach-filter-reduce/N3.tsx';

const cnTestBoard = cn('TestBoard');

interface TestBoardProps {
  className?: string;
}

export const TestBoard: FC<TestBoardProps> = (props) => {
  return (
    <div className={cnTestBoard(undefined, [props.className])}>
      <N3 />
    </div>
  );
};
