import styled from 'styled-components';

export const PaymentsContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    width: 70%;

    @media screen and (max-width: 900px) {
        margin-top: 50px;
        width: 90%;

        p {
        font-size: 14px;
        font-weight: 500;
        }
    }
`

export const Form = styled.form`
    min-height: 422px;
    padding: 40px 46px;
    width: 100%;

    p {
        font-size: 24px;
        font-weight: 500;
    }

    @media screen and (max-width: 900px) {
        height: 100%
    }
`;

export const FormInput = styled.input`
    border: none;
    border-bottom: 2px solid #878686;
    color: #495057;
    font-size: 14px;
    margin-top: 20px;
    padding: 10px 14px;
    width: 100%;

    &::placeholder {
        color: #878686;
    }

    &:focus {
        border-bottom: 2px solid #8c52e5;
    }
`;

export const Button = styled.button`
    align-items: center;
    background: #FFF;
    border: 2px solid #8c52e5;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 38px;
    transition: .3s;
    padding: 15px 40px;
    width: 100%;

    span {
        color: #8c52e5;
        font-size: 16px;
    }

    &:hover {
        background-color: #68DE5A;
    }
`

export const DashNameSection = styled.div`
  color: white;
  margin: 20px 0;
  margin-top: 40px;
  width: 70%;

  @media screen and (max-width: 900px){
    width: 100%;
  }
`
