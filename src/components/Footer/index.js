import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo
} from './FooterElements'

const Footer = () => {

const toggleHome = () => {
    scroll.scrollToTop();
}
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">How it work</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Career</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">How it work</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Career</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">How it work</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Career</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">How it work</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Career</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                Avi Nair {new Date().getFullYear()}
                </SocialLogo>
            </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer