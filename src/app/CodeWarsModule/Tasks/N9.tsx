import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN9 = cn('N9');

// describe("Sample Test Cases", function(){
//   it("Should return a string", function() {
//     assert.equal(solution.DNAtoRNA("TTTT"), "UUUU");
//     assert.equal(solution.DNAtoRNA("GCAT"), "GCAU");
//     assert.equal(solution.DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
//   });
// });

interface N9Props {
  className?: string;
}

export const N9: FC<N9Props> = (props) => {
  const str = 'GCAT';

  function DNAtoRNA(dna: string): string {
    return [...dna].map((el) => (el === 'T' ? 'U' : el)).join('');
  }

  function DNAtoRNA2(dna: string): string {
    return dna.replace(/T/g, 'U');
  }

  return <div className={cnN9(undefined, [props.className])}>N9</div>;
};
