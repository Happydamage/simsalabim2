interface Person {
  age: number;
  username: string;
  password: string;
}

// не безопасно
const obj = {
  age: 4,
  username: 'Aboba',
  password: '123456',
  password1: '123456',
  password2: '123456',
  password3: '123456',
} as Person;

//

const obj2 = <Person>{
  age: 5,
  username: 'Aboba',
  password: '123456',
};

//в тестах и конфигах вне продакшен кода для подгонки одних данных под другие
const str = '123456' as unknown as number;
//

//4.9 ts

//satisfies не преобразовывает объект, а проверяет соответствие, совпадают ли объекты структурно
const obj3 = {
  age: 5,
  username: 'Aboba',
  password: '123456',
} satisfies Person;

//
const PersonKeys = {
  age: '30',
  username: 'Abobus',
  password: '123456',
};

function keys<T extends object>(data: T): Array<keyof T> {
  return Object.keys(data) as Array<keyof T>;
}

const k = keys(PersonKeys);

//

type EmptyObject = {};

const obj4: EmptyObject = { age: '123' };
const obj5: EmptyObject = 1;
const obj6: EmptyObject = '';
const obj7: EmptyObject = () => {};
const obj8: EmptyObject = null;
const obj9: EmptyObject = undefined;
const obj10: Object = {};
const obj11: Object = 1;
const obj12: Object = '';
const obj13: Object = () => {};
const obj14: Object = null;
const obj15: Object = undefined;

const obj16: object = {};
const obj17: object = () => {};
const obj18: object = new Date();

const obj19: object = 1;
const obj20: object = '';
const obj21: object = null;
const obj22: object = undefined;
