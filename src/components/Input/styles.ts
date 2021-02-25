import styled from 'styled-components';

export const InputForm = styled.input`
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid #878686;
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;


  & + input {
    margin-top: 30px;
  }

  &::placeholder {
    color: #878686;
  }
  &:focus {
    border-bottom: 1px solid #68de5a;
  }
`;

export const ValidationError = styled.span`
position: absolute;
  top: 50;
  color: red;
  font-size: 12px;
  display: block;
`

