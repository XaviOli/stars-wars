import React from 'react'
import { NavHomeLinkContainer, NavhomeLink } from './navhome_styles';
import './styles.css';

const Navhome = () => {
  return (
    <>
        <NavHomeLinkContainer className="nav-home-container">
          <NavhomeLink 
          className="nav-home-link"
            to="/home" >HOME</NavhomeLink>
          <NavhomeLink 
          className="nav-home-link"
          to="/starships">STARSHIPS</NavhomeLink>
        </NavHomeLinkContainer>
    </>
  )
}

export default Navhome;