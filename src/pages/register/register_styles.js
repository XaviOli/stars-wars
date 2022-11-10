import styled from 'styled-components';
import { Div, P } from '../../styles';

const RegisterContainer = styled(Div)`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const AlertText = styled(P)`
   color: red;
`;

export { AlertText, RegisterContainer }