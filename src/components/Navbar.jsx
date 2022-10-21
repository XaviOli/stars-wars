import React from 'react';
import { Fragment } from 'react';
import logo from '../img/logo-star-wars.png';
import { Img, P } from './Styles';

const Navbar = () => {
  return (
    <Fragment>
      <div className='logo'>
        <Img src={logo} alt='Star Wars Logo' />
        <div className='login'>
          <P>LOG IN</P>
          <P>SING UP</P>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;