//MappedTypes - это типы которые позволяют создавать новые типы на основе существующих изменяя какие-то поля

import { number } from 'zod';

interface User {
  name: string;
  age: number;
  address: string;
  type?: string;
}

type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyType2<T> = {
  readonly [K in keyof T]?: T[K] | null;
};

const NewUser: ReadonlyType<User> = {
  age: 10,
};

const NewUser2: ReadonlyType2<User> = {
  age: 25,
};

type NewUser2 = ReadonlyType2<User>;

//

type OptionalType<T> = {
  readonly [K in keyof T]?: T[K] | null;
};

// Отмена readonly и '?' опциональности
type EditType<T> = {
  -readonly [K in keyof T]-?: T[K];
};

type NewUser3 = OptionalType<User>;
type NewUser4 = EditType<User>;

//

type ArrayAnalog<T> = {
  [K in number]: T;
};

//

type WithoutType<T> = {
  [K in keyof T as Exclude<K, 'type'>]: T[K];
};

type GetMethods<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: T[K];
};

const pew: WithoutType<User> = {};
const pew2: GetMethods<User> = {};
