import styled from "styled-components";
import { Link, Div, P } from '../../styles'

const NavbarContainer = styled(Div)`
    display: flex;
    justify-content: center;
`;

const NavbarLink = styled(Link)`
    color: #808080;
    padding: 5px;
    cursor: pointer;
`;

const ImageContainer = styled(Div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
`;

const NavLinkContainer = styled(Div)`
    display: flex;
    align-items: center;
    min-width: 150px;
`;

const NavText = styled(P)`
    color: #5a5a5a;
`

export { ImageContainer, NavbarContainer, NavLinkContainer, NavbarLink, NavText };

