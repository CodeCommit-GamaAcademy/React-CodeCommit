import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { SubmitButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    Icon: IconType;
}

const Button: React.FC<ButtonProps> = ({ text, Icon, ...props }) => {
    return (
        <SubmitButton {...props} >
            <span>Enviar</span>
            <Icon size={ 21 } color="#fff" />
        </SubmitButton>
    );
}

export default Button;