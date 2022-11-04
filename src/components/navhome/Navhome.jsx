import React from 'react'
import { NavHomeLinkContainer, NavhomeLink } from './navhome_styles';
import './styles.css';

const Navhome = () => {
  return (
    <>
        <NavHomeLinkContainer className="nav-home-container">
          <NavhomeLink 
            to="/home" >HOME</NavhomeLink>
          <NavhomeLink 
          to="/starships">STARSHIPS</NavhomeLink>
        </NavHomeLinkContainer>
    </>
  )
}

export default Navhome;