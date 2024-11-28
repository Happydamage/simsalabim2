import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN7 = cn('N7');

interface N7Props {
  className?: string;
}

//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//
//   Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

export const N7: FC<N7Props> = (props) => {
  function getGrade(a: number, b: number, c: number): string {
    const score = (a + b + c) / 3;

    return 90 <= score && score <= 100
      ? 'A'
      : 80 <= score && score <= 90
        ? 'B'
        : 70 <= score && score <= 80
          ? 'C'
          : 60 <= score && score <= 70
            ? 'D'
            : 0 <= score && score <= 60
              ? 'F'
              : '';
  }

  function getGrade2(a: number, b: number, c: number): string {
    const score = (a + b + c) / 3;

    switch (true) {
      case score >= 90:
        return 'A';
    }
  }

  console.log(getGrade2(70, 70, 100));

  return <div className={cnN7(undefined, [props.className])}>N7</div>;
};
