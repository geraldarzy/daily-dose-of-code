import React from 'react'
import './LandingPage.css'
import Button from 'react-bootstrap/button';
import { useHistory } from 'react-router-dom';
const LandingPage = ({isAuthenticated}) => {
    const history = useHistory();
    return (
        <div id='landingPageBody'>
            <h1>Daily Dose of Code</h1>
            <p><em>Slogan or something over here...</em></p>
            <br/>
            {!isAuthenticated ? (
                 <div>
                    <Button onClick={()=>history.push('/signup')} variant="dark">Signup</Button>
                    <Button onClick={()=>history.push('/login')} variant="dark">Login</Button>
                </div>
                ) : (
                    <Button onClick={()=>history.push('/home')} variant="dark">Start my day</Button>
            )}
           
        </div>
    )
}

export default LandingPage;
