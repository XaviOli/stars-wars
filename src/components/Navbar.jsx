import React from 'react';
import { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <div className='logo'>
        <img src={'./img/logo-star-wars.png'} alt='Star Wars Logo' />
        <div className='login'>
          <p>LOGIN</p>
          <p>SING UP</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;