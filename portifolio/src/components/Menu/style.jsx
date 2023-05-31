import styled from 'styled-components'

export const StyledMenu = styled.div`
    height: 10vh;
    width: 100%;
    background-color: #181818;
    padding-bottom: 100px;

    ul {
        display: flex;
        background-color: #181818;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 6rem;
        list-style: none;

    }

    li {
        list-style-type: none;
        text-decoration: none;
        font-family: montserrat;
        font-size: large;
        margin: 10px;

    }

    & a{
        position: relative;
        color: #fff;
        text-decoration: none;
    }

    & li a:hover{
    color: #16B8F3;
    transition: 0.4s;
    }

    & li a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    top: 20px;
    left: 0;
    background-color: #16B8F3;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    }

    & a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    }
`;

export default StyledMenu;