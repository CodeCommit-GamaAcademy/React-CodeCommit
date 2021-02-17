import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
`;

export const Content = styled.section`
    background: #FBFBFB;

    padding: 48px;  
    
    width: 455px;
    min-height: 422px;

    border-radius: 8px;

    .icon {
        width: 100%;
        text-align: center;
        color: #8C52E5;

        margin: 25px 0;
    }

    h3 {
        font-size: 23px;
        font-weight: 500;
        line-height: 27px;
        text-align: center;

        color: #8C52E5;

        padding: 12px 28px;
    }

    button {
        margin-top: 30px;

        background: #68DE5A;
        border: none;
        border-radius: 20px;
        width: 100%;

        padding: 8px 40px;

        color: #fff;
        font-size: 16px;
        font-weight: 500;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`