import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';

import Loading from '../components/Loading';

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={createAsyncComponent('./Home')} />
      <Route path="/companies" component={createAsyncComponent('./Company')} />
      <Route path="/services" component={createAsyncComponent('./Services')} />
      <Route
        path="/categories"
        component={createAsyncComponent('./Categories')}
      />
      <Route
        path="/category/:id"
        component={createAsyncComponent('./Category')}
      />
      <Route
        path="/service/:id"
        component={createAsyncComponent('./Service')}
      />
      <Route path="/user/:id" component={createAsyncComponent('./User')} />
      <Route path="/login" component={createAsyncComponent('./Login')} />
      <Route path="/logout" component={createAsyncComponent('./Logout')} />
      <Route component={createAsyncComponent('./NotFound')} />
    </Switch>
  );
}

const createAsyncComponent = url =>
  loadable({
    loader: () => import(/* webpackChunkName: "[request][index]" */ `${url}`),
    loading: Loading,
  });
