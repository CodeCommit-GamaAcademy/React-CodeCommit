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
    display: none;

    .logo {
      display: none;
    }


  }
`
export const DashBoardMobile = styled.div`

  background-color: #68DE5A;
  width: 100%;
  height: 80px;
  display: flex;


  @media screen and (min-width: 900px) {
    display: none;
  }

  .logo {
    width: 80px;
    height: 80px;
    margin-left: 10px;
    :hover {
      cursor: pointer;
    }

    @media screen and (min-width: 900px) {
    display: none;

    .logo { display: none;}
    }
  }
`
export const SandwichDiv = styled.div`

display: flex;
justify-content: right;
position: absolute; 
right: 5px;
margin-top: 10px;
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

export const LogOutButton = styled.button`
  position: absolute;
  bottom: 40px;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: #8C52E5;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ( max-width: 900px ) {
    bottom: auto;
    right: 30px;
    display: none;
  }
`
export const ContainerMobile = styled.div`
padding: 4em;
position: absolute;
top: 80px;
z-index: 9999;
background-color: rgba(0, 0, 0, 0.7);
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;

div { 
  margin-bottom: 0.5em;
}

@media ( min-width: 900px ) {
  display: none;
}

`

export const ExitButton = styled.div`
    background: #8C52E5;
    border-radius: 5px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    height: 90px;
    justify-content: space-around;
    padding: 10px;
    width: 90px;
    font-size: 14px;
    &.card-selected {
        border: 2px solid #FFF; 
    }

    img {
        height: 28px;
        width: 28px;
    }

    span {
        font-size: 12px;
    }

    :hover {
        cursor: pointer;
        background: #68DE5A;
          }

    @media ( max-width: 900px ) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: initial;

        height: 55px;

        img {
            height: 16px;
            width: 16px;
        }

        span {
            margin-left: 12px;
        }
    }
`
