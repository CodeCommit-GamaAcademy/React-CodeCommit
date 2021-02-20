import React, { InputHTMLAttributes } from 'react';

import { InputForm } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FC<InputProps> = ({ value, ...props }) => {
  return (
    <InputForm value={value} {...props} />
  );
}

export default Input;