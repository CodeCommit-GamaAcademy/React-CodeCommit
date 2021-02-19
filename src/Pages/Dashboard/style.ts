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

  .exit {
    border-radius: 50%;
    padding: 5px;
    width: 20px;
    height: 20px;
    transition: 1s;
    :hover {
      background: white;
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .logo {
    width: 90px;
    height: 90px;
    margin-top: 10px;
    :hover {
      cursor: pointer;
    }
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