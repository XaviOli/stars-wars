import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Div } from '../../styles';

const NavhomeContainer = styled(Div)`
    display: flex; 
    justify-content: center;
`;

const NavhomeLink = styled(NavLink)`
    color: #808080;
    padding: 5px; 
    text-decoration: none;
`;

const NavHomeLinkContainer = styled(Div)`
    display: flex; 
    align-items: center;
    min-width: 150px; 
`;


export { NavHomeLinkContainer, NavhomeContainer, NavhomeLink};