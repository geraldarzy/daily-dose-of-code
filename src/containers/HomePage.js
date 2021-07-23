import React from 'react'
import NavBar from '../components/NavBar'
import './HomePage.css'
const HomePage = () => {

    let name='Guest'
    let dayCount = 1
    return (
        <>
            <NavBar name={name} dayCount={dayCount}/>
            <div id='homepageBody'>
                <p id='welcomeMsg'>Hello {name} and welcome to Day {dayCount}</p>
                <p id=''>What would you like to learn about today?</p>
            </div>

        </>
    )
}

export default HomePage
