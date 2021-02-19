import styled from 'styled-components';

export const DashMenu = styled.nav`
  align-items: center;
  background: #68DE5A;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  justify-content: flex-start;
  width: 120px;

  .logo {
    width: 90px;
    height: 90px;
    margin-top: 10px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 85px;
    width: 100%;
    bottom: 0;
    div {
      width: 15%;
      height: 50%;

      span {
        font-size: 8px;
      }

      img {
        width: 10px;
        height: 10px;
      }
    }

    .logo {
      display: none;
    }
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
    img {
      background: #68DE5A;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      padding: 8px;
    };
  }

  @media screen and (max-width: 900px){
    width: 100%;
  }
`

export const DashMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 120px;
  margin-right: 50px;

  @media screen and (max-width: 900px){
    width: 100%;
    height: 100%;
    margin: 10px;
    margin-bottom: 140px;
  }
`

export const DashBoard = styled.div`
  display: flex;
  width: 100%;
`