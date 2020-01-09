import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable, { LoadingComponentProps } from 'react-loadable';

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

const ModuleLoader: React.ComponentType<LoadingComponentProps> = () => {
  return <Loading fixed />;
};

// If you ever want to extract these into a single function,
// don't waste your time. Dynamic imports don't play well with Routes
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home/Home'),
  loading: ModuleLoader,
});

const Services = Loadable({
  loader: () =>
    import(/* webpackChunkName: "services" */ './Services/Services'),
  loading: ModuleLoader,
});

const Service = Loadable({
  loader: () => import(/* webpackChunkName: "service" */ './Service/Service'),
  loading: ModuleLoader,
});

const Categories = Loadable({
  loader: () =>
    import(/* webpackChunkName: "categories" */ './Categories/Categories'),
  loading: ModuleLoader,
});

const Category = Loadable({
  loader: () =>
    import(/* webpackChunkName: "category" */ './Category/Category'),
  loading: ModuleLoader,
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './Profile/Profile'),
  loading: ModuleLoader,
});

const MyInfo = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myinfo" */ './Profile/MyInfo/MyInfo'),
  loading: ModuleLoader,
});

const Signup = Loadable({
  loader: () => import(/* webpackChunkName: "signup" */ './Signup/Signup'),
  loading: ModuleLoader,
});

const Signin = Loadable({
  loader: () => import(/* webpackChunkName: "signin" */ './Signin/Signin'),
  loading: ModuleLoader,
});

const Signout = Loadable({
  loader: () => import(/* webpackChunkName: "singout" */ './Signout/Signout'),
  loading: ModuleLoader,
});

const Auth = Loadable({
  loader: () => import(/* webpackChunkName: "auth" */ './Auth/Auth'),
  loading: ModuleLoader,
});

const TokenGrabber = Loadable({
  loader: () =>
    import(/* webpackChunkName: "tokengrabber" */ './Auth/TokenGrabber'),
  loading: ModuleLoader,
});

const ChangePassword = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "changepassword" */ './ChangePassword/ChangePassword'
    ),
  loading: ModuleLoader,
});

const ForgotPassword = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "forgotpassword" */ './ForgotPassword/ForgotPassword'
    ),
  loading: ModuleLoader,
});

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "notfound" */ './NotFound/NotFound'),
  loading: ModuleLoader,
});
