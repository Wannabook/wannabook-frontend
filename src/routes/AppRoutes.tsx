import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import { Loading } from 'components';

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
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
  loader: () => import(/* webpackChunkName: "home" */ './Home/Home'),
  loading: Loading,
});

const Services = Loadable({
  loader: () =>
    import(/* webpackChunkName: "services" */ './Services/Services'),
  loading: Loading,
});

const Service = Loadable({
  loader: () => import(/* webpackChunkName: "service" */ './Service/Service'),
  loading: Loading,
});

const Categories = Loadable({
  loader: () =>
    import(/* webpackChunkName: "categories" */ './Categories/Categories'),
  loading: Loading,
});

const Category = Loadable({
  loader: () =>
    import(/* webpackChunkName: "category" */ './Category/Category'),
  loading: Loading,
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './Profile/Profile'),
  loading: Loading,
});

const MyInfo = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myinfo" */ './Profile/MyInfo/MyInfo'),
  loading: Loading,
});

const Signup = Loadable({
  loader: () => import(/* webpackChunkName: "signup" */ './Signup/Signup'),
  loading: Loading,
});

const Signin = Loadable({
  loader: () => import(/* webpackChunkName: "signin" */ './Signin/Signin'),
  loading: Loading,
});

const Signout = Loadable({
  loader: () => import(/* webpackChunkName: "singout" */ './Signout/Signout'),
  loading: Loading,
});

const Auth = Loadable({
  loader: () => import(/* webpackChunkName: "auth" */ './Auth/Auth'),
  loading: Loading,
});

const TokenGrabber = Loadable({
  loader: () =>
    import(/* webpackChunkName: "tokengrabber" */ './Auth/TokenGrabber'),
  loading: Loading,
});

const ChangePassword = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "changepassword" */ './ChangePassword/ChangePassword'
    ),
  loading: Loading,
});

const ForgotPassword = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "forgotpassword" */ './ForgotPassword/ForgotPassword'
    ),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "notfound" */ './NotFound/NotFound'),
  loading: Loading,
});
