import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: black;
    }

    body {
        font-family: 'Open Sans Condensed' !important;
        padding: 20px 60px;
        
        @media screen and (max-width: 800px) {
            padding: 0;
        }

    }
`;
