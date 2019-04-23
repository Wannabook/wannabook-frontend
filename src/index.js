import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import AppRoutes from './routes/index';
import Header from './components/Header';

import store from './store';

import 'semantic-ui-css/semantic.min.css';

// TODO: Do we need withRouter anywhere here?
class App extends React.Component {
  render() {
    return (
      <>
        <Normalize />
        <Header />
        <AppRoutes />
      </>
    );
  }
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
