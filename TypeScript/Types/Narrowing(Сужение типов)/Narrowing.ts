function fn(arg: number | string | null) {
  if (typeof arg === 'number') {
    return Number(arg);
  } else if (typeof arg === 'string') {
    return String(arg);
  }

  return arg;
}

function fn2(arg: number | string | null, arg2: number) {
  if (arg === null) {
    return arg;
  }

  if (arg === arg2) {
    return arg;
  }

  return arg;
}

//

interface User {
  username: string;
  age: number;
}

interface Person {
  lastname: string;
  firstname: string;
  age: number;
}

function fn3(arg: User | Person) {
  if ('username' in arg) {
    return arg;
  }

  if ('firstname' in arg) {
    return arg;
  }

  return arg;
}

//Работает только с классами

class Bmw {
  bmwDrive() {
    //
  }
}

class Audi {
  audiDrive() {
    //
  }
}

const bmw = new Bmw();
const audi = new Audi();

function fn4(arg: Bmw | Audi) {
  if (arg instanceof Bmw) {
    arg.bmwDrive();
  } else {
    arg.audiDrive();
  }
}

//

interface BaseCar {
  maxSpeed: number;
  weight: number;
}

interface Bmw extends BaseCar {
  type: 'bmw';
  bmwField: string;
}

interface Audi extends BaseCar {
  type: 'audi';
  audiField: string;
}

interface Toyota extends BaseCar {
  type: 'toyota';
  audiField: string;
}

type Car = Audi | Bmw | Toyota;

function fn5(arg: Car) {
  switch (arg.type) {
    case 'audi':
      arg.audiField;
      break;
    case 'bmw':
      arg.bmwField;
      break;

    default:
      return arg;
  }
}

//Type Guards

interface Car2 {
  maxSpeed: number;
  width: number;
}

interface Person2 {
  age: number;
  name: string;
}

function isCar(value: Car2 | Person2): value is Car2 {
  return 'maxSpeed' in value && 'width' in value;
}

function isPerson(value: Car2 | Person2): value is Person2 {
  return 'age' in value && 'name' in value;
}

function isBmw(value: Bmw | Audi): value is Bmw {
  return value.type === 'bmw';
}

function fn6(data: Car2 | Person2) {
  if (isCar(data)) {
    return 1;
  } else {
    return 2;
  }
}
