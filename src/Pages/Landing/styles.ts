import styled from 'styled-components';

import Model from '../../assets/background-landing-1.png';
import Landing1 from '../../assets/landing-1.png';
import Landing2 from '../../assets/landing-2.png';
import BackImage from '../../assets/background-landing-3.png';

export const MainBanner = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  padding: 20px 0;
  background-image: url(${Model});
  background-position: 40% bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 50%;

  opacity: 0;
  animation: 0.6s forwards animationBanner;
  animation-delay: 0.3s;

  @keyframes animationBanner {
    from {
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 680px) {
    min-height: auto;
    background-size: 100%;
  }

  @media (max-height: 700px) {
    background-size: 45%;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  height: inherit;
  padding: 0 16px;
`;

export const MainBannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 680px) {
    flex-direction: column;
    padding-top: 32px;
  }
`;

export const MainBannerContentLeft = styled.div`
  animation: 0.6s forwards toRight;
  animation-delay: 0.6s;
  opacity: 0;

  @media (max-width: 680px) {
    width: 82%;
    position: relative;

    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background: red;
      position: absolute;
      bottom: -16px;
      background: #a7a7a73d;
    }
  }
`;

export const MainBannerContentRight = styled.div`
  animation: 0.6s forwards toRight;
  animation-delay: 0.8s;
  opacity: 0;

  @media (max-width: 680px) {
    margin-bottom: 50%;
    width: 100%;
  }

  form {
    width: 350px;
    max-width: 100%;
    min-height: 450px;
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 46px;

    @media (max-width: 680px) {
      margin-top: 32px;
      width: 100%;
    }

    .loader {
      margin: 30px auto 12px !important;
    }
  }
`;

export const MainBannerContentText = styled.div`
  p {
    width: 281px;
    height: 173px;
    font-size: 29px;
    color: #fff;
    font-weight: normal;
    line-height: 34px;
    font-style: normal;
  }

  span {
    display: block;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  background: #ffffff;
  border-radius: 20px;
  border: none;
  font-size: 17px;
  font-weight: 400;
  color: #8c52e5;
  padding: 20px;
  margin-top: 25px;
`;
export const FormHomeTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: #1d1d1d;
`;

export const HomeFormButton = styled.button`
  background: #d8d8d8;
  border-radius: 20px;
  height: 47.66px;
  width: 100%;
  border: none;
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
  color: #9b9b9b;

  .ArrowRight {
    width: 24px;
    height: 20px;
    justify-content: right;
  }
`;

export const SectionAbout = styled.section`
  background: #eaeaea;
  padding: 60px 0;
  width: 100%;
`;

export const SectionAboutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
`;

export const SectionAboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionAboutContentLeft = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  height: 700px;
  background-image: url(${Landing1});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 450px 450px;
  justify-content: space-between;
  padding: 40px 10px;

  @media (max-width: 770px) {
    background-size: contain;
  } 

  @media (max-width: 680px) {
    height: 500px;

    background-size: 235px;
    background-position: center;
  }

  span {
    color: #68de5a;
    font-size: 34px;
    font-style: normal;
    font-weight: 500;
    display: block;
    text-align: left;
    width: 100%;
    padding-left: 50px;

    @media (max-width: 990px) {
      padding-left: 10px;
    }

    @media (max-width: 680px) {
      font-size: 28px;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    color: #68de5a;
    font-size: 21px;
    width: 370px;
    max-width: 100%;
    padding-left: 50px;
    display: block;

    @media (max-width: 990px) {
      padding-left: 10px;
      padding-right: 10px;
      width: auto;
    }

    @media (max-width: 680px) {
      font-size: 16px;
    }
  }
`;

export const SectionAboutContentRight = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  height: 700px;
  background-image: url(${Landing2});
  background-position: 103px 150px;
  background-repeat: no-repeat;
  background-size: 320px 370px;
  justify-content: space-between;
  padding: 40px 10px;

  @media (max-width: 990px) {
    background-position: 45px 150px;
  }

  @media (max-width: 770px) {
    background-size: 70%;
    background-position: center;
  }

  @media (max-width: 680px) {
    height: 500px;
    font-size: 16px;

    background-size: 235px;
  }

  span {
    color: #000;
    font-size: 34px;
    font-style: normal;
    font-weight: 500;
    display: block;
    text-align: left;
    width: 100%;
    padding-left: 90px;

    @media (max-width: 990px) {
      padding-left: 10px;
    }

    @media (max-width: 680px) {
      font-size: 28px;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    color: #000;
    font-size: 21px;
    width: 370px;
    max-width: 100%;
    padding-left: 90px;
    display: block;

    @media (max-width: 990px) {
      padding-left: 10px;
      padding-right: 10px;
      width: auto;
    }

    @media (max-width: 680px) {
      font-size: 16px;
    }
  }
`;

export const SectionAnnuity = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 990px) {
    height: 80vh;
  }

  @media (max-width: 680px) {
    height: auto;
    padding: 60px 0;
  }
`;

export const SectionAnnuityContent = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  align-items: center;

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const SectionAnnuityContentLeft = styled.div`
  span {
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    display: block;

    @media (max-width: 680px) {
      font-size: 35px;
    }
  }

  p {
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 27px;
    display: flex;
    margin-top: 36px;
    width: 450px;

    @media (max-width: 990px) {
      width: auto;
    }

    @media (max-width: 680px) {
      font-size: 18px;
      margin-top: 4px;
    }
  }
`;

export const SectionAnnuityContentRight = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 186px;
    color: #68de5a;

    @media (max-width: 680px) {
      font-size: 120px;
    }
  }
`;

export const SectionBannerInfo = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: row;
  background: #68de5a;
  background-image: url(${BackImage});
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 990px) {
    height: 60vh;
    justify-content: center;
    text-align: center;
    padding: 60px 0;
  }
`;

export const SectionBannerInfoContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 990px) {
    justify-content: center;
    text-align: center;
  }
`;

export const SectionBannerInfoText = styled.div`
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    color: #fff;

    @media (max-width: 680px) {
      font-size: 35px;
    }
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-size: 23px;
    line-height: 27px;
    width: 459px;
    margin-top: 36px;
    color: #fff;

    @media (max-width: 990px) {
      width: auto;
    }

    @media (max-width: 680px) {
      font-size: 18px;
      margin-top: 4px;
    }
  }
`;

export const SectionAccount = styled.section`
  height: 100vh;
  background: #eaeaea;
`;

export const SectionAccountContent = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100%;
`;

export const SectionAccountContentText = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    width: 400px;
    max-width: 100%;
    margin-bottom: 25px;

    @media (max-width: 990px) {
      width: auto;
    }

    @media (max-width: 680px) {
      font-size: 35px;
      line-height: 1.1;
    }
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    margin-top: 25px;
  }
`;

export const SectionAccountContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;
