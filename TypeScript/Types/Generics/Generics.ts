interface User {
  username: string;
}

interface Article {
  title: string;
}

interface MetaData {
  timestamp: string;
}

interface ApiResponse<Data, Meta> {
  status?: 'error' | 'success';
  meta?: Meta;
  requestId?: string;
  data: Data;
}

const responseFromApi: ApiResponse<Article, MetaData> = {
  data: {
    title: 'qwe',
  },
  meta: {
    timestamp: '2018-02-01',
  },
};

//

interface Tree<T> {
  id: string;
  value: T;
  children: Tree<T>[] | null;
}

const treeNode: Tree<User> = {
  id: '10',
  value: {
    username: '123',
  },
  children: [
    {
      id: '11',
      value: {
        username: 'Pew',
      },
      children: null,
    },
  ],
};

//

function genericFn<T>(arg: T) {
  //
}

const arrowGeneric = <T>(arg: T) => {
  return arg;
};

//

function createEntity<T extends { id: string; createdAt: Date }>(arg: T) {
  //
}

class Order<T> {
  private data: T;

  constructor(arg: T) {
    this.data = arg;
  }
}
