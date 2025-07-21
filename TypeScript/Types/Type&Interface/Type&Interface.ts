import { number } from 'zod';

//Типизация функций
type Fn = (arg: number) => void;

interface Fn1 {
  (arg: number): string;
}

const fn: Fn = (arg: number) => {
  return 123;
};

const fn1: Fn1 = (arg: number) => {
  return '1';
};
