//Awaited<Type>

//This type is meant to model operations like await in async functions,
// or the .then() method on Promises - specifically,
// the way that they recursively unwrap Promises

type A = Awaited<Promise<string>>;
type B = Awaited<Promise<Promise<number>>>;
type C = Awaited<boolean | Promise<number>>;

//Partial<Type> - Делает для типа все поля опциональными
//Required<Type> - Делает для типа все поля обязательными

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

interface Todo2 {
  title?: string;
  description?: string;
}

function updateTodo2(todo: Todo2, fieldsToUpdate: Required<Todo2>) {
  return { ...todo, ...fieldsToUpdate };
}

//Readonly<Type> делает поля типа доступными только для чтения
//Pick<Type> - забирает поля из типа
//Omit<Type> - исключает поля из типа

interface User {
  name: string;
  age: number;
  type: string;
  friends: Array<string>;
}

type NewUser = Pick<User, 'name' | 'friends'>;
type NewUser2 = Omit<User, 'age' | 'type'>;

//Exclude<Type> - альтернатива  Pick для юнион типов
//Extract<Type> - альтернатива  Omit для юнион типов

type Color = 'red' | 'green' | 'blue' | 'yellow';

type NarrowColor = Exclude<Color, 'blue' | 'yellow'>;
type NarrowColor2 = Extract<Color, 'blue' | 'yellow'>;

//ReturnType<Type> - возвращает тип результата функции
//Parameters<Type> - возвращает тип параметров функции

function fn(arg: number, arg2: string): string | number {
  return '';
}

type ReturnTypeFn = ReturnType<typeof fn>;
type Params = Parameters<typeof fn>;

//Record

type CatName = 'mew' | 'miu' | 'maw';

interface CatInfo {
  age: number;
  breed: string;
}

const Cats: Record<CatName, CatInfo> = {
  mew: { age: 3, breed: 'qwe' },
  miu: { age: 3, breed: 'qwe' },
  maw: { age: 3, breed: 'qwe' },
};
