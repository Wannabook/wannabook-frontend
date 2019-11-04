import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from '../components/Loading';

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/companies" component={Company} />
      <Route path="/services" component={Services} />
      <Route path="/service/:id" component={Service} />
      <Route path="/categories" component={Categories} />
      <Route path="/category/:id" component={Category} />
      <Route exact path="/profile/:id/my-info" component={MyInfo} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/sign-in" component={Signin} />
      <Route path="/sign-out" component={Signout} />
      <Route path="/sign-up" component={Signup} />
      <Route path="/auth/google/token" component={TokenGrabber} />
      <Route path="/auth" component={Auth} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route component={NotFound} />
    </Switch>
  );
}

// If you ever want to extract these into a single function,
// don't waste your time. Dynamic imports don't play well with Routes
const Home = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Home/Home'),
  loading: Loading,
});

const Company = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Company/Company'),
  loading: Loading,
});

const Services = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Services/Services'),
  loading: Loading,
});

const Service = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Service/Service'),
  loading: Loading,
});

const Categories = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Categories/Categories'),
  loading: Loading,
});

const Category = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Category/Category'),
  loading: Loading,
});

const Profile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Profile/Profile'),
  loading: Loading,
});

const MyInfo = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Profile/MyInfo/MyInfo'),
  loading: Loading,
});

const Signup = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Signup/Signup'),
  loading: Loading,
});

const Signin = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Signin/Signin'),
  loading: Loading,
});

const Signout = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Signout/Signout'),
  loading: Loading,
});

const Auth = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Auth/Auth'),
  loading: Loading,
});

const TokenGrabber = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './Auth/TokenGrabber'),
  loading: Loading,
});

// todo do we show changePassword anywhere?
const ChangePassword = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ '../components/routes/Profile/MyInfoPage/ChangePassword/ChangePassword'),
  loading: Loading,
});

const ForgotPassword = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './ForgotPassword/ForgotPassword'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "[request][index]" */ './NotFound/NotFound'),
  loading: Loading,
});
