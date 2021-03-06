import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
export const GlobalStyle = createGlobalStyle`

    html {
        height: 100%;
        
    }
    body: {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
    }
    #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        display: flex;
        font-family: sans-serif;
        height:100%;
        justify-content: center;
        padding: 140px;
    }
`;
