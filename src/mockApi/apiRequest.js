const apiRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve([{ name: 'Google' }, { name: 'Facebook' }])
        : reject('Something gone wrong...');
    }, 3000);
  });
};

export default apiRequest;
