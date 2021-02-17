import styled from 'styled-components';

export const BalanceItem = styled.div`
  background-color: #FBFBFB;
  width: 310px;
  height: 180px;
  border-radius: 8px;
  margin-right: 50px;
  margin-left: 50px;

  .title {
    margin-top: 10px;
    margin-bottom: 25px;
  }

  .value {
    margin-left: 30px;
  }

  .credit {
    color: #1783E7;
  }

  p {
    margin-left: 30px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #9B9B9B;
  }

  h3 {
    font-size: 21px;
    font-weight: 700;
    margin-right: 30px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 25px;
    h3 {
      color: #68DE5A;
    }
  }
`

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`