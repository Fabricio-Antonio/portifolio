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
`;

export default GlobalSyles