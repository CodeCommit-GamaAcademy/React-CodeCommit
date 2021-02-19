import React from 'react';
import { PaymentsContainer } from './style';
import { FiArrowLeft } from 'react-icons/fi';

interface PaymentsProps {
  func: Function;
}

const Payments: React.FC<PaymentsProps> = ( props ) => {
  return (
    <PaymentsContainer>
      <FiArrowLeft onClick={() => {props.func('')}}/>
      <p>Pagamentos</p>
    </PaymentsContainer>
  );
}

export default Payments;