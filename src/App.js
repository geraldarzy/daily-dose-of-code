import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import LandingPage from './containers/LandingPage';
import HomePage from './containers/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Auth } from 'aws-amplify';
import { AppContext } from './libs/contextLib';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function App() {

  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, userIsAuthenticating] = useState(true);

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push('/login');
  };

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if(e !== "No current user") {
        alert(e);
      }
    }
    userIsAuthenticating(false);
  };

  useEffect(() => {
    onLoad();
  }, []);


  return (
    !isAuthenticating &&
    (
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>

        <Route exact path='/home'>
          <HomePage/>
        </Route>

      </Switch>
    )
  );
}

export default App;
