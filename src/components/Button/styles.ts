import styled from 'styled-components';

export const SubmitButton  = styled.button`
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