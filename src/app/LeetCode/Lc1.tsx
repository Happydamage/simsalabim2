import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN12 = cn('Lc1');

interface Lc1Props {
  className?: string;
}

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

export const Lc1: FC<Lc1Props> = (props) => {
  // // Approach 1: Brute Force
  //
  // function twoSum(nums: number[], target: number): number[] {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[j] === target - nums[i]) {
  //         return [i, j];
  //       }
  //     }
  //   }
  //
  //   return [];
  // }

  // Approach 2: Two-pass Hash Table

  // function twoSum(nums: number[], target: number): number[] {
  //   const map: Map<number, number> = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     const complement = target - nums[i];
  //     if (map.has(complement)) {
  //       return [map.get(complement), i];
  //     }
  //     map.set(nums[i], i);
  //   }
  //   // Return an empty array if no solution is found
  //   return [];
  // }

  // console.log(twoSum([2, 11, 7, 1], 9));

  return <div className={cnN12(undefined, [props.className])}>N12</div>;
};
