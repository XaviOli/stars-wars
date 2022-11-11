import styled from 'styled-components';
import { Div } from '../../styles';

const StarshipsListContainer = styled(Div)`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 150px; 
`;

const LoaderContainer = styled(Div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;


export { LoaderContainer, StarshipsListContainer};