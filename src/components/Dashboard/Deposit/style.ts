import styled from 'styled-components';


export const DepositContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 70%;

  form {
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
  }

  @media screen and (max-width: 900px) {
    margin-top: 50px;
    width: 90%;

    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
`