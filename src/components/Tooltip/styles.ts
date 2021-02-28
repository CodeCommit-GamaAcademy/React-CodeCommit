import styled from 'styled-components';

export const Container = styled.div`
  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  span {
    position: absolute;
    color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.34);
    padding: 4px;
    top: -45px;
    border-radius: 4px;
    background: #8c52e5;
    bottom: calc(100% + 12px);
    text-align: center;
    width: 160px;
    left: 50%;
    transform: translateX(-50%);
    min-height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s;

    &::after {
      content: '';
      display: inline-block;
      border-style: solid;
      border-color: #8c52e5 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
