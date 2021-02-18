import styled from 'styled-components';

export const BalanceItem = styled.div`
  background-color: #FBFBFB;
  width: 300px;
  height: 170px;
  border-radius: 8px;
  margin-right: 50px;
  margin-left: 50px;

  .title {
    margin-top: 10px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    p {
      margin-top: 5px;
      margin-left: 15px;
    }
  }

  .value {
    margin-left: 25px;
  }

  .credit {
    color: #1783E7;
  }

  img {
    width: 27px;
    height: 27px;
    margin-left: 25px;
  }

  p {
    margin-left: 25px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #9B9B9B;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-right: 25px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 20px;
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