import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import loadable from 'react-loadable';

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Page 1</Link>
        <Link to="/page2">Page 2</Link>

        <Route
          path="/"
          exact
          component={createAsyncComponent('./routes/Page1')}
        />
        <Route
          path="/page2"
          component={createAsyncComponent('./routes/Page2')}
        />
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
