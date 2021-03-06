import styled from 'styled-components';

export const MainHeader = styled.header`
  position: absolute;
  width: 100%;

  @media (max-width: 680px) {
    position: relative;
  }
`;

export const MainHeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
`;
