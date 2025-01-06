import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnLc1 = cn('Lc1');

interface Lc1Props {
  className?: string;
}

export const Lc1: FC<Lc1Props> = (props) => {
  function twoSum(nums: number[], target: number): number[] {
    const grid = {} as Record<number, number>;

    nums.forEach((el, index) => {
      grid[target - el] = index;
    });

    console.log(grid);
  }

  console.log(twoSum([3, 2, 4], 6));

  return (
    <div className={cnLc1(undefined, [props.className])}>
      <div>123</div>
    </div>
  );
};
