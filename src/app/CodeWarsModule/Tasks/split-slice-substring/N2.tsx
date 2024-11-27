import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN2 = cn('N2');

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. ' +
//'You're given one parameter, the original string.
// You don't have to worry about strings with less than two characters.

interface N2Props {
  className?: string;
}

export const N2: FC<N2Props> = (props) => {
  function removeChar(str: string): string {
    return str
      .split('')
      .slice(1, str.length - 1)
      .join('')
      .toString();
  }

  function removeChar2(str: string): string {
    return str.slice(1, -1);
  }

  function removeChar3(str: string): string {
    return str.substring(1, str.length - 1);
  }

  return <div className={cnN2(undefined, [props.className])}>N2</div>;
};
