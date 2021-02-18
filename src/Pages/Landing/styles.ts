import styled from 'styled-components';

import Model from '../../assets/background-landing-1.png';
import Landing1 from '../../assets/landing-1.png';
import Landing2 from '../../assets/landing-2.png';
import BackImage from '../../assets/background-landing-3.png';



export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-image: url(${Model});
  background-position: center bottom;
  background-repeat: no-repeat;
`;
export const LogoGama = styled.img`
  position: absolute;
  left: 65px;
  height: 65px;
  top: 58px;
`

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 180px;
  top: 351px;
  position: absolute;
`

export const TextContainer = styled.div`
    p{
      width: 281px;
      height: 173px;
      font-size:29px;
      color: #fff;
      font-weight: normal;
      line-height: 34px;
      font-style: normal;
    }

    span { 
      display: block;
      margin-top: 20px;
    }

`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  background: #FFFFFF;
  border-radius: 20px;
  border: none;
  font-size: 17px;
  font-weight: 500;
  color: #8C52E5;
  padding: 20px;
  margin-top:25px;
`



export const CardRight = styled.div`
  position: absolute;
  background-color: #fff;
  width: 349px;
  height: 461.23px;
  top: 220px;
  right: 135px;
  border-radius: 8px;
  padding-left: 40px;
  padding-right: 40px;
`
export const FormHomeTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-top: 25px;
  color: #1D1D1D;
`


export const FormInput = styled.input`
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid #878686;
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  &::placeholder {
    color: #878686;
  }
  &:focus {
    border-bottom: 1px solid #68de5a;
  }
`;

export const HomeFormButton = styled.button`
  background: #D8D8D8;
  border-radius: 20px;
  height: 47.66px;
  width: 100%;
  border:  none;
  margin-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #9B9B9B;


  .ArrowRight { 
    width: 24px;
    height: 20px;
    justify-content: right;
  }

` 

export const Section2 = styled.section`
  display: flex;
  background: #eaeaea;
  width: 100%;
  height: 100vh;
  flex-direction: row;
`
export const LeftContainer = styled.div`
  background: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 660px;
  height: 700px;
  margin-left: 63px;
  margin-top: 54px;
  background-image: url(${Landing1});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 450px 450px;

  span {
    color: #68de5a;
    font-size: 34px;
    font-style: normal;
    font-family: Roboto;
    font-weight: 500;
    margin-top: 80px;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #68de5a;
    font-size: 21px;
    width: 300px;
    margin-top: 413px;
    margin-left: -100px;
  }

`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f8f8f8;
  width: 660px;
  height: 700px;
  margin-top: 54px;
  margin-right: 58px;
  background-image: url(${Landing2});
  background-position: 125px 150px;
  background-repeat: no-repeat;
  background-size: 320px 370px;

  span {
    color: #000;
    font-size: 34px;
    font-style: normal;
    font-family: Roboto;
    font-weight: 500;
    margin-top: 80px;
    margin-left: -150px;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #000;
    font-size: 21px;
    width: 300px;
    margin-top: 413px;
    margin-left: -100px;
  }
`

export const Section3 = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  span{
    color: #fff;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    display: flex;
    align-items: center;
  }

  p{
    color: #fff;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    width: 459px;
    font-size: 23px;
    line-height: 27px;
    display: flex;
    align-items: center;
    margin-top: 36px;
  }
`

export const RightSide = styled.div`
  display: flex;

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 186px;
    line-height: 218px;
    color: #68de5a;
  }
`

export const Section4 = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: row;
  background: #68de5a;
  background-image: url(${BackImage});
`
export const TextSection4 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 170px;

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    color: #fff;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-size: 23px;
    line-height: 27px;
    width: 459px;
    margin-top: 36px;
    color: #fff;
  }
`
export const Section5 = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  background: #EAEAEA;
`

export const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  
  
  span{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    width: 400px;
    margin-bottom: 25px;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    margin-top: 25px;
  }
`

export const ImageSide = styled.div`
  display: flex;

  
`


