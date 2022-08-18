import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap');
    body,
    html,
    #root {
        height: 100%;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a,
    a:hover {
        color: inherit;
    }
`;
