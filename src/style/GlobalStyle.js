import { createGlobalStyle } from 'styled-components';
import './font.css';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    };
    button {
        border: none;
    };
`;

export default GlobalStyle;
