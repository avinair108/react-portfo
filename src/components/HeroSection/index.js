import React from 'react'
import Typewriter from 'typewriter-effect';
import './LandingPage.css'
import Image from '../../images/react-image.jpg'

const HeroSection = () => {
  return (
    <div className='mainContainer' id='home'>
        <div className='mainBackground'>
            <img className='mainImage' src={Image} alt='inspirational'/>
        </div>
        <div className='mainContent'> 
            <h1 className='mainHeader'>
            <Typewriter
            options= {{
              strings: ["Hi there" , "I'm Avi", "Welcome to my site!"],
              autoStart: true,
              loop: true,
              delay: 50,
              pauseFor: 1750,
            }}
          />
            </h1>
        </div>
    </div>
  )
}

export default HeroSection