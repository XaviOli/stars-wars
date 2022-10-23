import React from 'react'
import { NavHomeLinkContainer, NavhomeContainer, NavhomeLink } from './navhome_styles';

const Navhome = () => {
  return (
    <>
        <NavHomeLinkContainer>
            <NavhomeLink>HOME</NavhomeLink>
            <NavhomeLink>STARSHIPS</NavhomeLink>
        </NavHomeLinkContainer>
    </>
  )
}

export default Navhome;