import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Div } from '../../styles';


const NavhomeLink = styled(NavLink)`
    color: #808080;
    padding: 5px; 
    text-decoration: none;
    border-bottom: 2px solid transparent;
`;

const NavHomeLinkContainer = styled(Div)`
    display: flex; 
    align-items: center;
    min-width: 150px; 
    justify-content: center;
`;


export { NavHomeLinkContainer, NavhomeLink};