import styled from "styled-components";
import { Div, Link } from '../../styles';

const NavhomeContainer = styled(Div)`
    display: flex;
    justify-content: center;
`;

const NavhomeLink = styled(Link)`
    color: #808080;
    padding: 5px;
`;

const NavHomeLinkContainer = styled(Div)`
    display: flex;
    align-items: center;
    min-width: 150px;
`;

export { NavHomeLinkContainer, NavhomeContainer, NavhomeLink };