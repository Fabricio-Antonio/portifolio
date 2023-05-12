import styled from 'styled-components'

export const StyledMenu = styled.div`
    height: 10vh;
    width: 100vw;
    color: purple;
    background-color: #7f7fa5;

    ul {
        text-decoration: none;
        color: red;
        display: flex;
        justify-content: space-between;
    }

    li {
        list-style-type: none;
        
    }
`;

export default StyledMenu;