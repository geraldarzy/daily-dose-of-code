import React, { useState, useEffect } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Auth } from 'aws-amplify';
import { AppContext } from './libs/contextLib';
import Routes from './Routes';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from './components/NavBar';



function App() {

  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, userIsAuthenticating] = useState(true);

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push('/');
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
      <div>
        <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>  
        <AppContext.Provider value ={{ isAuthenticated, userHasAuthenticated }}>
          <Routes isAuthenticated={isAuthenticated} />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
