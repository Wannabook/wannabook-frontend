import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import loadable from 'react-loadable';

class App extends React.Component {
  componentDidMount() {
    console.log('process.env.API_URL', process.env.API_URL);
  }

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
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
