import React from 'react'
import { NavHomeLinkContainer, NavhomeContainer, NavhomeLink } from './navhome_styles';
import './styles.css';

const Navhome = () => {
  return (
    <>
        <NavHomeLinkContainer>
          <NavhomeLink 
            to="/home" >HOME</NavhomeLink>
          <NavhomeLink 
          to="/starships">STARSHIPS</NavhomeLink>
        </NavHomeLinkContainer>
    </>
  )
}

export default Navhome;