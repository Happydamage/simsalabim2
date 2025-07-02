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
