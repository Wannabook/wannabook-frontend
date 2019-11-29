import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import store from './store/store';

import 'semantic-ui-css/semantic.min.css';

import { sum } from './utils/utils';

const sumOfTwo = sum(4, 5);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

// module.hot.accept();
