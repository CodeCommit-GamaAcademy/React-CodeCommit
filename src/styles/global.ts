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

    body *::-webkit-scrollbar {
        width: 8px;
        border: 1px solid lightgray;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    body *::-webkit-scrollbar-track {
        background: '#fff';
    }
    body *::-webkit-scrollbar-thumb {
        width: 100%;
        background: #68DE5A;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    body::-webkit-scrollbar {
        width: 8px;
        border: 1px solid lightgray;
    }
    body::-webkit-scrollbar-track {
        background: '#fff';
    }
    body::-webkit-scrollbar-thumb {
        width: 100%;
        background: #68DE5A;
        border-radius: 8px;
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
