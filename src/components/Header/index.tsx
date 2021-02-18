import React from 'react';
import Logo from '../Logo';

import { MainHeader, MainHeaderContainer } from './styles';

const Header = () => {
  return (
    <MainHeader>
      <MainHeaderContainer>
        <Logo />
      </MainHeaderContainer>
    </MainHeader>
  )
}

export default Header;
