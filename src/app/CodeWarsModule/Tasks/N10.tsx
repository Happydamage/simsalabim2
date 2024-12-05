import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN10 = cn('N10');

interface N10Props {
  className?: string;
}

// Given an array of integers.
//
//   Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//   0 is neither positive nor negative.
//
//   If the input is an empty array or is null, return an empty array.
//
//   Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

export const N10: FC<N10Props> = (props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

  function countPositivesSumNegatives(input: number[] | null) {
    let pos = 0;
    let neg = 0;
    const result = [];
    if (input && input?.length) {
      input.forEach(function (el: number) {
        return el < 0 ? (neg += el) : el > 0 ? (pos += 1) : [];
      });
    } else {
      return [];
    }

    result.push(pos, neg);

    return result;
  }

  console.log(countPositivesSumNegatives(arr));

  return <div className={cnN10(undefined, [props.className])}>N10</div>;
};
