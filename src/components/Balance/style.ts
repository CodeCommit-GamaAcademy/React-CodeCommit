import styled from 'styled-components';

export const BalanceItem = styled.div`
  background-color: #FBFBFB;
  width: 40%;
  height: 170px;
  border-radius: 8px;

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

  .hide {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    @keyframes glow {
      from {
        background: #68DE5A;
      }
      to {
        background: #8C52E5;
      }
    }
    animation: glow 2s infinite alternate;
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

  @media screen and (max-width: 900px) {
    margin-top: 20px;
    width: 100%;
  }
`

export const BalanceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`

export const DashNameSection = styled.div`
  color: white;
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  margin: 20px 0;
  margin-top: 40px;
  width: 695px;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    div {
      color: #8C52E5;
      background: #68DE5A;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      padding: 8px;
      transition: 1s;
      :hover {
        cursor: pointer;
        opacity: 0.8;
      }
    };
  }

  @media screen and (max-width: 900px){
    width: 100%;
  }
`