import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
// import { animateScroll as scroll } from 'react-scroll'
import { 
    Nav, 
    NavbarContainer, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks,
    // NavBtn,
    // NavBtnLink 
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={500}
                        activeClass='active'
                        spy={true}
                        exact='true'
                        offset={-80}
                        >About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Projects</NavLinks>
                    </NavItem>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to='/signin'>Contact</NavBtnLink>
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar