export const routes = {
  home: () => '/',

  codeWars: {
    main: () => '/code-wars',
    add: () => `/code-wars/add`,
    codeWarsById: (id: string) => `/code-wars/${id}`,
  },

  typeScriptChallenge: {
    main: () => '/ts-challenge',
  },
};
