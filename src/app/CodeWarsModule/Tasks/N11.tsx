import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN11 = cn('N11');

interface N11Props {
  className?: string;
}

export const N11: FC<N11Props> = (props) => {
  function getSum(a: number, b: number): number {
    let result = 0;

    if (a < b) {
      for (let i = a; i <= b; i++) {
        result += i;
      }
    }

    if (a > b) {
      for (let i = b; i <= a; i++) {
        result += i;
      }
    }

    if (a === b) {
      return a;
    }

    return result;
  }

  return <div className={cnN11(undefined, [props.className])}>N11</div>;
};
