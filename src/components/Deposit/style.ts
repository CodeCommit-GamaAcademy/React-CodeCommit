import styled from 'styled-components';


export const DepositContainer = styled.div`
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