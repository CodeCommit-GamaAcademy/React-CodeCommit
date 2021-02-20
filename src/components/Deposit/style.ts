import styled from 'styled-components';

export const DepositContainer = styled.div`
  background: #FBFBFB;
  padding: 20px;
  width: 80%;
  border-radius: 8px;
  height: 400px;
  margin-top: 70px;
  padding: 40px 46px;

  p {
    font-size: 24px;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 90%;
    

    hr {
      width: 80%;
      margin-top: 5px;
      margin-left: 10px;
    }

    input {
      margin-left: 10px;
      border: 0;
      width: 80%;
      height: 30px;
      
    }

    button {
    background: white;
    border-radius: 20px;
    border: 2px solid #8C52E5;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #8C52E5;
        padding: 10px;

        p {
          font-size: 14px;
          font-weight: 300;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    margin-top: 50px;
    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
`