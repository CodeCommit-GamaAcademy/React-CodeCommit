import styled from 'styled-components';

export const TransactionsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 100%;

  @media screen and (max-width: 900px){
    width: 90%;
    height: 100%;
  }
`

export const MonthConatiner = styled.div`
  display: flex;
  color: white;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  width: 60%;

  input {
    background: transparent;
    border-radius: 2px;
    border: 1px solid #68DE5A;
    color: white;
    height:24px;
    padding: 2px;
    width: 40px;
    margin-left: 10px;
    font-size: 14px;
  }
`