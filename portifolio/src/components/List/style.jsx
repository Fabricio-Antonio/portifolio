import styled from 'styled-components'

export const StyledList = styled.div`

        margin-top: 8px;
        font-weight: 500;
        list-style: none;
        font-size: 30px;
        align-items: left;
        display: grid;
        margin-left: 16px;
        padding-left: 20px;
        margin: 8px 16px 8px 8px;

        grid-template-columns: 1fr 1fr 1fr;

        & svg {
            padding-right: 10px;
            font-size: 50px;
        }

        @media (max-width: 425px) {
            grid-template-columns: 1fr 1fr;

            & svg {
            font-size: 35px;
        }
        }
`;

export default StyledList;