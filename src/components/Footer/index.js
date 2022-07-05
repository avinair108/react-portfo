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
                        <FooterLinkTitle>Thank You</FooterLinkTitle>
                            <FooterLink to="/">For Visiting</FooterLink>
                            <FooterLink to="/">My Portfolio</FooterLink>
                            <FooterLink to="/">I Made This</FooterLink>
                            <FooterLink to="/">Footer For Fun</FooterLink>
                            <FooterLink to="/">And Aesthetics</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>You Can</FooterLinkTitle>
                            <FooterLink to="/">Click These</FooterLink>
                            <FooterLink to="/">Links To</FooterLink>
                            <FooterLink to="/">See If One</FooterLink>
                            <FooterLink to="/">Contains A Secret</FooterLink>
                            <FooterLink to="/">Surprise</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                        <FooterLinkTitle>Thank You</FooterLinkTitle>
                            <FooterLink to="/">For Visiting</FooterLink>
                            <FooterLink to="/">My Portfolio</FooterLink>
                            <FooterLink to="/">I Made This</FooterLink>
                            <FooterLink to="/">Footer For Fun</FooterLink>
                            <FooterLink to="/">And Aesthetics</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>You Can</FooterLinkTitle>
                            <FooterLink to="/">Click These</FooterLink>
                            <FooterLink to="/">Links To</FooterLink>
                            <FooterLink to="/">See If One</FooterLink>
                            <FooterLink to="/">Contains A Secret</FooterLink>
                            <FooterLink to="/">Surprise</FooterLink>
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