import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #FAFAFA;
        --white: #FFFFFF;

        --green-50: #3CB3AB;
        --green-100: #147A73;

        --grey-10: #F1F1F1;
        --grey-40: #DBDBDB;
        --grey-100: #7A7A7A;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
    }

    body, input, textarea, button {
        font-family: 'Commissioner', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;