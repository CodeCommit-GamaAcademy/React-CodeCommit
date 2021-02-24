import styled from 'styled-components';

export const LoaderIcon = styled.span`
  height: 32px;
  width: 32px;
  display: block;
  border: solid #84e 4px;
  border-right: transparent 4px solid;
  border-radius: 50%;
  animation: animaLoader infinite 0.8s linear;
  margin: auto;

  @keyframes animaLoader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
