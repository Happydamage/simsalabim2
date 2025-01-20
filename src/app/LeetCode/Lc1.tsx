import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

// Two Sum
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//   You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//   You can return the answer in any order.
//
//
//
//   Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//   Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]
//
//
// Constraints:
//
//   2 <= nums.length <= 104
//   -109 <= nums[i] <= 109
//   -109 <= target <= 109
// Only one valid answer exists.
//
//
//   Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

const cnLc1 = cn('Lc1');

interface Lc1Props {
  className?: string;
}

export const Lc1: FC<Lc1Props> = (props) => {
  // Variant 1

  //   function twoSum(nums: number[], target: number): number[] {
  //     for (let i = 0; i < nums.length; i++) {
  //       for (let j = i + 1; j < nums.length; j++) {
  //         if (target - nums[i] === nums[j]) {
  //           return [i, j];
  //         }
  //       }
  //     }
  //     return [];
  //   }

  // ------------------------------------------------------------------------

  // Variant 2

  // function twoSum(nums: number[], target: number): (number | undefined)[] {
  //   const map: Map<number, number> = new Map();
  //
  //   for (let i = 0; i < nums.length; i++) {
  //     const x = target - nums[i];
  //
  //     if (map.has(x)) {
  //       return [map.get(x), i];
  //     }
  //
  //     map.set(nums[i], i);
  //   }
  //
  //   return [];
  // }

  // console.log(twoSum([2, 3, 1, 7], 8));

  return (
    <div className={cnLc1(undefined, [props.className])}>
      <div>Lc1</div>
    </div>
  );
};
