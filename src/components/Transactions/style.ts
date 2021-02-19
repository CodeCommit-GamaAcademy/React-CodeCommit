import styled from 'styled-components';

export const TransactionsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: 900px){
    width: 100%;
    height: 100%;
    margin: 10px;
  }
`