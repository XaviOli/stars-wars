import React from 'react';
import logo from '../../assets/img/logo-star-wars.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  NavbarContainer, 
  NavLinkContainer, 
  NavbarLink, 
  ImageContainer, 
  NavText,
  Image
} from './navbar_styles';

 
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <nav>
        <div className="nav-social flex items-center justify-center my-1.5">
          <a href="http://facebook.com">
            <FaFacebook className="link" />
          </a>
          <> </>
          <a href="http://twitter.com">
            <FaTwitter className="link" />
          </a>
          <> </>
          <a href="http://instagram.com">
            <FaInstagram className="link" />
          </a>
          <> </>
          <a href="http://youtube.com">
            <FaYoutube className="link" />
          </a>
        </div>
        </nav>
        <ImageContainer>
          <Image src={logo} alt='Star Wars Logo' />
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