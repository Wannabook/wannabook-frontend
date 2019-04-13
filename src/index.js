import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import loadable from 'react-loadable';

import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/company/123456">Gorod Krasoty</Link>
        <Link to="/login">Login</Link>
        <Link to="/user/123456">User Pasha</Link>

        <Switch>
          <Route
            path="/"
            exact
            component={createAsyncComponent('./routes/Home')}
          />
          <Route
            path="/companies"
            component={createAsyncComponent('./routes/Companies')}
          />
          <Route
            path="/company/:id"
            component={createAsyncComponent('./routes/Company')}
          />
          <Route
            path="/user/:id"
            component={createAsyncComponent('./routes/User')}
          />
          <Route
            path="/login"
            component={createAsyncComponent('./routes/Login')}
          />
          <Route component={createAsyncComponent('./routes/NotFound')} />
        </Switch>
      </div>
    );
  }
}

const createAsyncComponent = url =>
  loadable({
    loader: () => import(/* webpackChunkName: "[request][index]" */ `${url}`),
    loading: () => <p>Loading...</p>,
  });

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
