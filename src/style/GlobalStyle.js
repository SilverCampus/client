import { createGlobalStyle } from 'styled-components';
import './font.css';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    };
    a {
        text-decoration: none;
    };
    button {
        border: none;
        padding: 0;
    };
    *::-webkit-scrollbar {
        display: none;
    };
`;

export default GlobalStyle;
