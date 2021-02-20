import React from 'react';
import { useHistory } from 'react-router-dom';

import LogoSRC from '../../assets/main-logo.png';

import { LogoIMG } from './styles';

const Logo: React.FC = () => {
    const history = useHistory();

    return (
        <LogoIMG onClick={ () => history.push('/') } src={ LogoSRC } alt="Logo principal" />
    );
}

export default Logo;