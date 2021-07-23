import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import LoginPage from './containers/login';
import SignupPage from './containers/Singup';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/login'>
        <LoginPage />
      </Route>
      <Route exact path='/signup'>
        <SignupPage />
      </Route>
    </Switch>
  );
};
