import styled from 'styled-components';
import { Div } from '../../styles';

const StarshipContainer = styled(Div)`
   padding: 1rem 0rem;
`;

const StarshipsListContainer = styled(Div)`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 150px; 
`;

const StarshipsName = styled.h2`
    text-align: center;
    padding: 0.5rem 0rem;
`;

const LoaderContainer = styled(Div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;


export { LoaderContainer, StarshipContainer, StarshipsListContainer, StarshipsName};