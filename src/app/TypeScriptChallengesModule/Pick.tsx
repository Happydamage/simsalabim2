import { FC } from 'react';

//https://medium.com/@bytefer
//https://github.com/type-challenges/type-challenges?tab=readme-ov-file
//https://programming.earthonline.us/what-are-k-t-and-v-in-typescript-generics-9fabe1d0f0f3

export const Pick: FC = () => {
  // function identity<T, U>(value: T, message: U): T {
  //   console.log(value + message);
  //   return value + message;
  // }
  //
  // identity<number, string>(12, 'qwe');

  type Item = { a: string; b: number; c: boolean };
  type ExType1<T> = { [P in keyof T]: T[P] };
  type ExType2<T> = { [P in keyof T]?: T[P] };

  type MyType = ExType1<Item>;
  type MyType2 = ExType2<Item>;

  const W1: MyType = {
    a: 'qwe',
    b: 1,
    c: true,
  };

  const W2: MyType2 = {
    a: 'qwe',
    b: 1,
    // c: true,
  };

  return <div></div>;
};
