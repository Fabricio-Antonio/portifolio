import styled from 'styled-components'

export const Line = styled.div`
    border-top: 4px solid #181818;
    box-sizing: border-box;
    margin-top: 90px;
    width: 150px;
    margin-left: 1.5625vw;

    @media (max-width: 425px) {
            margin-left: 1.25rem;
    }
`;

export default Line;