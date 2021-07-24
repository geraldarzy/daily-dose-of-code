import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import LandingPage from './containers/LandingPage';
import LoginPage from './containers/login';
import SignupPage from './containers/Signup';

export default function Routes({isAuthenticated}) {
  return (
    <Switch>
      <Route exact path='/'>
        <LandingPage isAuthenticated={isAuthenticated}/>
      </Route>
      <Route exact path='/login'>
        <LoginPage />
      </Route>
      <Route exact path='/signup'>
        <SignupPage />
      </Route>
      <Route exact path='/home'>
        <HomePage />
      </Route>
    </Switch>
  );
};
