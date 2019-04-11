import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import loadable from 'react-loadable';

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/companies">Companies</Link>

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
          <Route component={createAsyncComponent('./routes/NotFound')} />
        </Switch>
      </div>
    );
  }
}

const createAsyncComponent = url =>
  loadable({
    loader: () => import(`${url}`),
    loading: () => <p>Loading...</p>,
  });

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();
