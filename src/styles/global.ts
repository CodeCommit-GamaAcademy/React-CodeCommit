import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        background: #8C52E5;
    }

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
    
    a {
        color: #000;
        text-decoration: none;
    }

    @keyframes toRight { from { opacity: 0; transform: translateX(-30px) } to { opacity: 1; transform: translateX(0px) }
    }
`;
