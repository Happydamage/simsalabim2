import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN1 = cn('N1');

//     Consider an array/list of sheep where some sheep may be missing from their place.
//   We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
//   [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined

interface N1Props {
  className?: string;
}

export const N1: FC<N1Props> = (props) => {
  const array1 = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ];

  function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let sum = 0;
    arrayOfSheep.forEach(function (el) {
      if (el) {
        sum += 1;
      }
    });
    return sum;
  }

  function countSheeps1(arrayOfSheep: (boolean | undefined | null)[]) {
    return arrayOfSheep.filter(Boolean).length;
  }

  function countSheeps2(arrayOfSheep: (boolean | undefined | null)[]): number {
    return arrayOfSheep.reduce((a, b) => a + (b ? 1 : 0), 0);
  }

  return <div className={cnN1(undefined, [props.className])}>N1</div>;
};
