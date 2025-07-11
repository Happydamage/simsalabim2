//Optional chaining

interface Person {
  name: string;
  address?: {
    street: string;
  };
  getAge?: () => number;
  array?: string[];
}

function prepareUser(user: Person) {
  console.log(user.address?.street);
  console.log(user.getAge());
  console.log(user.getAge?.());
  console.log(user.array[0]);
  console.log(user.array?.[0]);
}

prepareUser({
  name: 'Pew',
});

//! Non-null operator - better do not use in production

interface Person2 {
  name: string;
  address?: {
    street: string;
  };
  getAge?: () => number;
  array?: string[];
}

function prepareUser2(user: Person2) {
  console.log(user.address!.street);
}

prepareUser2({ name: 'Pew' });
