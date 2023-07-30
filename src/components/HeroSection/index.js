import React from 'react'
// import Video from '../../video/video.mp4'
// import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
// ArrowForward, ArrowRight } from './HeroElements'
import {HeroBg } from './HeroElements'
// import { Button } from '../ButtonElement'
import Typewriter from 'typewriter-effect';
import './LandingPage.css'
import Image from '../../images/react-image.jpg'

const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () =>{
  //   setHover(!hover);
  // };

  return (
    <div className='mainContainer' id='home'>
        <HeroBg>
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
            <img className='mainImage' src={Image} alt='inspirational'/>
        </HeroBg>
        <div className='mainContent'> 
            <h1 className='mainHeader'>
            <Typewriter
            options= {{
              strings: ["Hi there!" , "I'm Avi!"],
              autoStart: true,
              loop: true,
              delay: 50,
              pauseFor: 1750,
            }}
          />
            </h1>
          {/* <p className='mainText'>
            Welcome
          </p> */}
          {/* <div className='mainButtonWrapper'>
            <Button 
            to='about' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            >
              About Me   
            {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </div> */}
        </div>
    </div>
  )
}

export default HeroSection