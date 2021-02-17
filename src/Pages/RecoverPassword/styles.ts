import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
`;

export const MainLogo = styled.img`
    position: absolute;
    top: 64px;
    left: 64px;
`

export const Form = styled.form`
    width: 455px;
    min-height: 422px;

    background: #FBFBFB;
    border-radius: 8px; 

    padding: 40px 46px;

    text-align: center;
`

export const FormTitle = styled.h1`
    font-size: 23px;

    margin-bottom: 12px;
`

export const FormDescription = styled.p`
    font-weight: 300;
    font-size: 14px;

    margin-bottom: 40px;
`

export const InputFields = styled.section`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 100%;

    border: none;
    background: none;
    border-bottom: 1px solid #878686;

    padding: 5px 8px;

    transition: .3s;

    &:active, &:focus {
        border-bottom: 1px solid #68DE5A;
    }

    &::placeholder {
        font-weight: 500;
        color: #878686;
        font-size: 14px;
    }

    & + & {
        margin-top: 55px;
    }
`

export const SubmitButton  = styled.button`
    margin-top: 28px;

    width: 100%;
    padding: 12px 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #68DE5A;
    border: none;
    border-radius: 20px;

    transition: .3s;

    span {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
    }

    &:hover {
        background-color: #32cd20;
    }
`