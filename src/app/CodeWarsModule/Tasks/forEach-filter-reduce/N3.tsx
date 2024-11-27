import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN3 = cn('N3');

interface N3Props {
  className?: string;
}

export const N3: FC<N3Props> = (props) => {
  // You get an array of numbers, return the sum of all of the positives ones.
  //
  //   Example [1,-4,7,12] => 1 + 7 + 12 = 20
  //
  // Note: if there is nothing to sum, the sum is default to 0.

  // describe("solution", function(){
  //   it("Basic Tests", function(){
  //     assert.equal(solution.positiveSum([1,2,3,4,5]),15);
  //     assert.equal(solution.positiveSum([1,-2,3,4,5]),13);
  //     assert.equal(solution.positiveSum([]),0);
  //     assert.equal(solution.positiveSum([-1,-2,-3,-4,-5]),0);
  //     assert.equal(solution.positiveSum([-1,2,3,4,-5]),9);
  //   });
  // });

  const arr = [-1, 2, 3, 4, -5];

  function positiveSum(arr: number[]): number {
    return arr.reduce((sum, el) => sum + (el > 0 ? el : 0), 0);
  }
  console.log(positiveSum(arr));

  return <div className={cnN3(undefined, [props.className])}>N3</div>;
};
