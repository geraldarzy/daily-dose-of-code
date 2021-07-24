import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = ({name='Guest', dayCount=1, isAuthenticated, handleLogout}) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Daily Dose Of Code</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        {isAuthenticated ? (
                            <>
                                <Navbar.Collapse className="justify-content-center">
                                    <Navbar.Text>
                                        Signed in as: {name} | Day: {dayCount}
                                    </Navbar.Text>
                                </Navbar.Collapse>


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
                    </Navbar.Collapse>
                   
                </Container>
        </Navbar>
        </>
    )
}

export default NavBar
