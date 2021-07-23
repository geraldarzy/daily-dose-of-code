import React, { useState, useEffect } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Auth } from 'aws-amplify';
import { AppContext } from './libs/contextLib';
import Routes from './Routes';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';


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
        <Navbar bg="light" expand="md">
          <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted">
              Daily Dose of Code
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={window.location.pathname}>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/settings">
                    <Nav.Link>Settings</Nav.Link>
                  </LinkContainer>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value ={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
