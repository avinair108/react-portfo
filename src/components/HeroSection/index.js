import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () =>{
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent> 
            <HeroH1>
            <Typewriter
            options= {{
              strings: ["Hi there!" , "I'm Avi!"],
              autoStart: true,
              loop: true,
              delay: 50,
              pauseFor: 1750,
            }}
          />
            </HeroH1>
          <HeroP>
            Welcome to my website!
          </HeroP>
          <HeroBtnWrapper>
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
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection