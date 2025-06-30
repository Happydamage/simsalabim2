//union X|Y

type MainInfo = {
  firstName: string;
  lastName: string;
}

type AdditionalInfo = {
  age: number;
}

type FullInfo = MainInfo | AdditionalInfo;

const info0: FullInfo = {firstName: 'Qwe', lastName: 'Asd', age: 18};
const info1: FullInfo = {firstName: 'Qwe', lastName: 'Asd'};
const info2: FullInfo = {age: 18};
const info6: FullInfo = {age: 18, firstName: 'Qwe'};

//intersection X&Y
// не может быть пересечения между строкой и числом - ( let value: string & number; )

type FullInfo2 = MainInfo & AdditionalInfo;

const info3: FullInfo2 = {firstName: 'Qwe', lastName: 'Asd', age: 18};
const info4: FullInfo2 = {firstName: 'Qwe', lastName: 'Asd'};
const info5: FullInfo2 = {age: 18};
