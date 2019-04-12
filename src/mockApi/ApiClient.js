export default class ApiClient {
  constructor() {
    this.data = {
      '/organizations': [
        {
          id: 1,
          name: 'Google',
        },
        {
          id: 2,
          name: 'Facebook',
        },
      ],
      '/users': [
        {
          id: 1,
          name: 'Dmitri',
        },
        {
          id: 2,
          name: 'Ilya',
        },
        {
          id: 3,
          name: 'Artur',
        },
      ],
    };
  }
  get(resourceUrl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.4
          ? resolve(this.data[resourceUrl])
          : reject('Something gone wrong...');
      }, 3000);
    });
  }
}
