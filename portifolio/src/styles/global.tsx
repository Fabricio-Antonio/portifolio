import { createGlobalStyle } from "styled-components";

const GlobalSyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        ::-webkit-scrollbar {
            width: 10px;
        }
    
        ::-webkit-scrollbar-track {
            background-color: #f8f8f8;
        }
    
        ::-webkit-scrollbar-thumb {
            background-color: #16B8F3;
            border-radius: 10px;
            border: 2px solid #f8f8f8;
        }

    }

    .nav {
        position: fixed;
    }

    .Navbar {
        background-color: #181818;
    }

    NavbarToggler{
        position: fixed
    }

    .test {
        button {
            background-color:  #16B8F3;
            color: #181818;
            border: none;
        }

        ul {
        background-color: #181818;
        justify-content: space-evenly;
        align-items: center;
        padding: 0.5rem 2rem;
        list-style: none;

    }

    li {
        list-style-type: none;
        text-decoration: none;
        font-family: montserrat;
        font-size: large;
    }

    & img{

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


    & a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    }


}
`;

export default GlobalSyles