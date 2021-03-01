import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);
    width: 100vw;
    height: 100vh;

    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 50px;
    
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    max-height: 400px;
    width: 100%;
    max-width: 600px;

    background: rgba(255, 255, 255, .87);
    border-radius: 8px;

    padding: 0px 20px;

    h1 {
        margin-bottom: 40px;
        font-weight: 500;
        text-shadow: 2px 0px 40px #000;
        text-align: center;
    }

    div {
        width: 100%;
        text-align: center;
    }

    @media ( max-width: 550px ) {
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    } 
`

export const Button = styled.button<{ isAcceptButton?: boolean }>`
    background: '#fff';
    border-radius: 4px;
    border: 1px solid ${props => props.isAcceptButton ? '#68DE5A' : '#8C52E5'};
    
    width: 100%;
    max-width: 180px;

    padding: 12px 18px;

    font-size: 22px;
    font-weight: 500px;

    transition: .5s;

    & + & {
        margin-left: 40px;
    }

    &:hover {
        background: ${ props => props.isAcceptButton ? '#68DE5A' : '#8C52E5' };
        color: #fff;
        border: 1px solid #000;
    }

    @media ( max-width: 550px ) {
        & + & {
            margin-left: 0;
            margin-top: 40px;
        }
    } 
`