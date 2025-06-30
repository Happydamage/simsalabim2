//unknown - безопасный способ, когда мы не знаем какой тип данных ожидается на вход,
// сделать его неизвестным и потом за счёт проверок безопастно его обработать

function logData(data: unknown) {
  let value: string;
  if (data === 'string') {
    value = data;
  }

  if (Array.isArray(data)) {
    data;
  }
}

//never

enum Values {
  FIRST,
  SECOND,
  THIRD,
}

function fn(value: Values) {
  switch (value) {
    case Values.FIRST:
      return value;

    case Values.SECOND:
      return value;

    default:
      const exhaustiveCheck: never = value;
      return value;
  }
}

fn(Values.FIRST);
fn(Values.SECOND);

//void

function fn1(): void {
  console.log(1);
}

type Fn = (arg: number, arg2: string) => void;

function fn2(arg: Fn): void {
  console.log(2);
}
