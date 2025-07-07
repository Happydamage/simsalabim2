//typeof
const obj = {
  name: 'Pew',
  age: 25,
};

type Person = typeof obj;

//

let color = 'red';

type RedColor = typeof color;

const green: RedColor = 'green';

//

function getData(user: Person, age: number, value: string): number | string {
  return 123;
}

type GetDataFn = typeof getData;

type GetDataReturnValue = ReturnType<typeof getData>;
type GetDataParams = Parameters<typeof getData>;

//====================================================
//keyof
type PersonKey = keyof Person;
type PersonKey2 = keyof typeof obj;

//

export function getByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getByKey(obj, 'age');
