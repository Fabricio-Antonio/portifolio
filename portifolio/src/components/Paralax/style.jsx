import styled from 'styled-components';
import js from '../../../public/img/test.jpg';

export const StyledParalax = styled.div`
    background-image: url(${js});
    width: auto;
    height: 100px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export default StyledParalax;