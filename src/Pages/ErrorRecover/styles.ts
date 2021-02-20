import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
`;

export const Content = styled.div`
  padding: 40px 46px;
  background: #fff;
  min-height: 422px;
  border-radius: 8px;
  width: 455px;
  background: #fbfbfb;
  padding: 48px;
  animation: 0.6s forwards toRight;

  > svg {
    width: 100%;
    text-align: center;
    color: #8c52e5;
    margin: 25px 0;
  }

  h3 {
    font-size: 23px;
    font-weight: 500;
    line-height: 27px;
    text-align: center;
    color: #8c52e5;
    padding: 12px 28px;
  }

  button {
    margin-top: 30px;
  }
`;
