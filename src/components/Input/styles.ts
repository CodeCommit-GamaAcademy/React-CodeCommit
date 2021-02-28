import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface InputFormContainerProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocused: boolean;
}

export const InputFormContainer = styled.div<InputFormContainerProps>`
  position: relative;
  width: 100%;
  height: auto;

  ${(props) =>
    props.isErrored &&
    css`
      input {
        border-bottom: 1px solid #d02222;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      input {
        border-bottom: 1px solid #68de5a;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      input {
        border-bottom: 1px solid #68de5a;
      }
    `}
`;

export const InputForm = styled.input`
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid #878686;
  width: 100%;
  padding: 10px 32px 10px 14px;
  font-size: 14px;

  & + input {
    margin-top: 30px;
  }

  &::placeholder {
    color: #878686;
  }
`;

export const ValidationError = styled(Tooltip)`
  position: absolute;
  bottom: 11px;
  right: 4px;
  color: #d02222;
  font-size: 12px;
  display: block;

  svg {
  }

  /* Forçando que a tooltip de erro seja vermelho de: erro */
  span {
    background: #d02222 !important;

    ::after {
      border-color: #d02222 transparent !important;
    }
  }
`;
