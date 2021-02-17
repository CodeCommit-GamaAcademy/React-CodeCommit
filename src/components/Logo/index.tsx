import React from 'react';

import LogoSRC from '../../assets/main-logo.png';

import { LogoIMG } from './styles';

const Logo: React.FC = () => {
  return (
      <LogoIMG src={ LogoSRC } alt="Logo principal" />
  );
}

export default Logo;