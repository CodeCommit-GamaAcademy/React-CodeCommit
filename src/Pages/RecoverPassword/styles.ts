import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  padding: 150px 16px 30px;

  @media (max-width: 680px) {
    min-height: auto;
    padding: 50px 16px;
  }

  form {
    width: 455px;
    min-height: 422px;
    background: #fbfbfb;
    border-radius: 8px;
    padding: 40px 46px;
    text-align: center;
    display: flex;
    flex-direction: column;

    animation: 0.6s forwards toRight;

    input:nth-child(1) {
      margin-top: 40px;
    }

    input {
      margin-top: 50px;
    }

    .loader {
      margin: 42px auto 0;
    }
  }
`;

export const FormTitle = styled.h1`
  font-size: 23px;

  margin-bottom: 12px;
`;

export const FormDescription = styled.p`
  font-weight: 300;
  font-size: 14px;
`;

export const FormBoxInput = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  &.has-animation {
    animation: toRight 0.6s forwards;
  }
`;
