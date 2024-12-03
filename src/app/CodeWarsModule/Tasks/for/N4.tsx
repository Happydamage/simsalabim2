import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN4 = cn('N4');

interface N4Props {
  className?: string;
}

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

export const N4: FC<N4Props> = (props) => {
  const reverseSeq = (n: number): number[] => {
    const arr = [];
    for (n; n > 0; n--) {
      arr.push(n);
    }
    return arr;
  };

  return <div className={cnN4(undefined, [props.className])}>N4</div>;
};
