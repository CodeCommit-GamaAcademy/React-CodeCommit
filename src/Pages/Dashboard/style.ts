import styled from 'styled-components';

export const DashMenu = styled.nav`
  width: 110px;
  height: 100vh;
  position: fixed;
  background-color: #68DE5A;
  display: flex;
  justify-content: center;
  img {
    width: 90px;
    height: 90px;
    margin-top: 10px;
  }
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
    flex-wrap: wrap;
    img {
      background: #68DE5A;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      padding: 8px;
    };
  }
`

export const DashMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const DashBoard = styled.div`
  display: flex;
`