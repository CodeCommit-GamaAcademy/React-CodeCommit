import styled from 'styled-components';

export const DashMenu = styled.nav`
  align-items: center;
  background: #68DE5A;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-area: menu;
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

    .logo {
      display: none;
    }
  }
`

export const DashMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: dash;
  width: 100%;
  height: 100%;
  padding: 60px 0px 0px 0px;
  justify-content: center;
`

export const DashBoard = styled.div`
  display: grid;
  grid-template-areas: 'main dash';
  grid-template-columns: 10% 90%;
  width: 100%;

  @media screen and (max-width: 900px){
    grid-template-areas: 'dash' 'menu';
    grid-template-columns: 100%;
    grid-template-rows: 85% 15%;
  }
`
