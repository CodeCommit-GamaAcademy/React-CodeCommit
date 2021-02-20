import styled from 'styled-components';

export const DashMenu = styled.nav`
  align-items: center;
  background-color: #68DE5A;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100vh;
  justify-content: flex-start;
  width: 120px;

  .logo {
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
    .icons {

      
      img, .icon {
        color: #8C52E5;
        background: #68DE5A;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        padding: 8px;

        cursor: pointer;

        margin-left: 12px;
      };
    };
  }
`

export const DashMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const DashBoard = styled.div`
  display: flex;
`