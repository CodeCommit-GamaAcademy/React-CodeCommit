import styled from 'styled-components';



export const DepositContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 70%;
  
  .header-form {
    display: flex;
    justify-content: space-between;
    padding: 40px 46px 0;

    p {
      font-size: 24px;
      font-weight: 500;
    }

    button {
      height: 30px;
      display: flex;
      justify-content: center;
      margin: 0;
      width: 45%;
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;

      button {
        margin-top: 10px;
        width: 100%;

        span {
          font-size: 14px;
        }
      }
    }
  }

  form {
    min-height: 322px;
    padding: 0 46px 40px;
    width: 100%;

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