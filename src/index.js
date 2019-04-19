import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import loadable from 'react-loadable';
import { Normalize } from 'styled-normalize';

import Header from './components/Header';

import 'semantic-ui-css/semantic.min.css';

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
          <Link to="/about">About</Link>
        </Header>
        <Route
          path="/"
          exact
          component={createAsyncComponent('./routes/Home')}
        />
        <Route
          path="/about"
          component={createAsyncComponent('./routes/About')}
        />
      </>
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
