import React from 'react';
import logo from '../../assets/img/logo-star-wars.png';
import {
  NavbarContainer, 
  NavLinkContainer, 
  NavbarLink, 
  ImageContainer, 
  NavText} from './navbar_styles';
import {Img} from '../../styles'
 
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <ImageContainer>
        <Img src={logo} alt='Star Wars Logo' />
        </ImageContainer>
        <NavLinkContainer>
          <NavbarLink to="/login">LOG IN</NavbarLink>
          <NavText>{"//"}</NavText>
          <NavbarLink to="/register">SING UP</NavbarLink>
        </NavLinkContainer>
      </NavbarContainer>
      </>)
}

export default Navbar;