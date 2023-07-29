import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import './FooterElements.css';
import { Link} from 'react-router-dom';

const Footer = () => {

const toggleHome = () => {
    scroll.scrollToTop();
}
  return (
    <footer className='footerContainer'>
        <div className='footerWrap'>
            <section className='socialMedia'>
            <div className='socialMediaWrap'>
                <Link className='logo' to='/' onClick={toggleHome}>
                Avi Nair {new Date().getFullYear()}
                </Link>
            </div>
            </section>
        </div>
    </footer>
  )
}

export default Footer