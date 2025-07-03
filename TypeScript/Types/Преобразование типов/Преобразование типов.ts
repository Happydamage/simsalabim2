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
