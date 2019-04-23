import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import { Normalize } from 'styled-normalize';

import Header from './components/Header';
import Loading from './components/Loading';

import store from './store';

import 'semantic-ui-css/semantic.min.css';

// TODO: Do we need withRouter anywhere here?
class App extends React.Component {
  componentDidMount() {
    console.log('process.env.API_URL', process.env.API_URL);
  }

  render() {
    return (
      <>
        <Normalize />
        {/*We should abstract away this header and its contents into a separate component*/}
        {/*Same with the list of routes that I'm now doing. This list should be somewhere in a separate place */}
        <Header>
          <Link to="/">Home</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/company/123456">Gorod Krasoty</Link>
          <Link to="/user/123456">User Pasha</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Log out</Link>
        </Header>
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
      </>
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
