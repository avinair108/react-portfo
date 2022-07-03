import React, {useState} from 'react'
import Icon1 from '../../images/languages.svg'
import Icon2 from '../../images/tools.svg'
import Icon3 from '../../images/opsys.svg'
import Icon4 from '../../images/apps.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    CardWrap,
    CardWrap2,
    CardWrap3,
    CardWrap4,
    BtnWrap
} from './ServicesElements'
import { Button } from '../DefaultButton'
const Services = (isOpen, toggle) => {

const [hover, setHover] = useState(false);

  const onHover = () =>{
    setHover(!hover);
  };

  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>My Skills</ServicesH1>
        <ServicesWrapper>
            <CardWrap 
            onMouseDown={onHover} >
                {!hover ? <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Languages</ServicesH2>
                    <ServicesP>Click Us To See More!</ServicesP>
                </ServicesCard> : <ServicesCard>
                    <ServicesH2>Languages(Click to Toggle)</ServicesH2>
                    <ServicesP>C, C++, Java, JavaScript, HTML/CSS, Python</ServicesP>
                </ServicesCard>}
            </CardWrap>
            <CardWrap2 
            onMouseDown={onHover} >
                {!hover ? <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Tools and Frameworks</ServicesH2>
                    <ServicesP>Click Us To See More!</ServicesP>
                </ServicesCard> : <ServicesCard>
                    <ServicesH2>Tools and Frameworks(Click to Toggle)</ServicesH2>
                    <ServicesP>Node.js, Swing, Express.js, React</ServicesP>
                </ServicesCard>}
            </CardWrap2>
            <CardWrap3 
            onMouseDown={onHover} >
                {!hover ? <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Operating Systems</ServicesH2>
                    <ServicesP>Click Us To See More!</ServicesP>
                </ServicesCard> : <ServicesCard>
                    <ServicesH2>Operating Systems(Click to Toggle)</ServicesH2>
                    <ServicesP> Linux, MacOSX, Windows XP, Windows 10, iOS</ServicesP>
                </ServicesCard>}
            </CardWrap3>
            <CardWrap4 
            onMouseDown={onHover} >
                {!hover ? <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Applications</ServicesH2>
                    <ServicesP>Click Us To See More!</ServicesP>
                </ServicesCard> : <ServicesCard>
                    <ServicesH2>Applications(Click to Toggle)</ServicesH2>
                    <ServicesP>MS Office, Adobe XD, Google Workspace, Google App Engine</ServicesP>
                </ServicesCard>}
            </CardWrap4>
        </ServicesWrapper>
        <BtnWrap>
            <Button 
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}>View My Projects
            </Button>
        </BtnWrap>
    </ServicesContainer>
    </>
  )
}

export default Services