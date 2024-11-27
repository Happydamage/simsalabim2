import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN5 = cn('N5');

interface N5Props {
  className?: string;
}

// Your classmates asked you to copy some paperwork for them.
// You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need.
// If n < 0 or m < 0 return 0.

export const N5: FC<N5Props> = (props) => {
  function paperwork(n: number, m: number): number {
    // if (n > 0 && m > 0) {
    //   return n * m
    // } else {
    //   return 0
    // }

    return n > 0 && m > 0 ? n * m : 0;
  }

  return <div className={cnN5(undefined, [props.className])}>N5</div>;
};
