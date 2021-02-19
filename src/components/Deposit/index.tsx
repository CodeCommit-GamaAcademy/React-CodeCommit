import React from 'react';
import { DepositContainer } from './style';
import { FiArrowLeft } from 'react-icons/fi';

// import { Container } from './styles';

interface DepositProps {
  func: Function;
}

const Deposit: React.FC<DepositProps> = ( props ) => {
  
  return (
    <DepositContainer>
      <FiArrowLeft onClick={() => {props.func('')}}/>
      <p>Deposito</p>
    </DepositContainer>
  );
}

export default Deposit;