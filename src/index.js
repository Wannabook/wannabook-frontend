import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import { Normalize } from 'styled-normalize';

import Header from './components/Header';
import Loading from './components/Loading';

import store from './store';

// TODO: Do we need withRouter anywhere here?
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/company/123456">Gorod Krasoty</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Log out</Link>
          </li>
          <li>
            <Link to="/user/123456">User Pasha</Link>
          </li>
        </ul>

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
          <Route
            path="/logout"
            component={createAsyncComponent('./routes/Logout')}
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
    loading: Loading,
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
