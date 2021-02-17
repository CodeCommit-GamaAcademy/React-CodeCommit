import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Form = styled.form`
  padding: 40px 46px;
  background: #fff;
  min-height: 422px;
  border-radius: 8px;
  width: 455px;

  a {
    color: #8c52e5;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '>';
      display: inline-block;
      margin-left: 4px;
    }

    & + a {
      margin-top: 10px;
    }
  }

  .form-button {
    margin-bottom: 38px;
    margin-top: 36px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const FormInput = styled.input`
  margin-top: 50px;
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
