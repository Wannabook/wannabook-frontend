import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from '../components/Loading';

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/companies" component={Company} />
      <Route path="/services" component={Services} />
      <Route path="/service/:id" component={Service} />
      <Route path="/categories" component={Categories} />
      <Route path="/category/:id" component={Category} />
      <Route path="/user/:id" component={User} />
      <Route path="/sign-in" component={Signin} />
      <Route path="/sign-out" component={Signout} />
      <Route path="/sign-up" component={Signup} />
      <Route path="/auth" component={Auth} />
      <Route component={NotFound} />
    </Switch>
  );
}

// If you ever want to extract these into a single function,
// don't waste your time. Dynamic imports don't play well with Routes
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Home'),
  loading: Loading,
});

const Company = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Company'),
  loading: Loading,
});

const Services = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Services'),
  loading: Loading,
});

const Service = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Service'),
  loading: Loading,
});

const Categories = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Categories'),
  loading: Loading,
});

const Category = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Category'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './User'),
  loading: Loading,
});

const Signup = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Signup'),
  loading: Loading,
});

const Signin = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Signin'),
  loading: Loading,
});

const Signout = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Signout'),
  loading: Loading,
});

const Auth = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './Auth'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "[request][index]" */ './NotFound'),
  loading: Loading,
});