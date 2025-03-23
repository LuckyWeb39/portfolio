import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #191919;
        line-height: 1.2;
        min-height: 375px;
    }

    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    section {
        padding: 70px 0;
    }
    
`