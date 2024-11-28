import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnN6 = cn('N6');

interface N6Props {
  className?: string;
}

// 7kata

// This time no story, no theory. The examples below show you how to write function accum:
//
//   Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

export const N6: FC<N6Props> = (props) => {
  const pew = 'ZPpGggLlllNnnnnRrrrrrXxxxxxxQqqqqqqqE';

  function accum(s: string): string {
    const arr = Array.from(s);
    let answer = '';

    for (let i = 0; i < arr.length; i++) {
      if (i > 0) {
        answer += '-' + arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i);
      } else {
        answer += arr[i].toUpperCase();
      }
    }

    return answer;
  }

  function accum2(s: string): string {
    return [...s]
      .map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index))
      .join('-');
  }

  return <div className={cnN6(undefined, [props.className])}>N6</div>;
};
