import React from 'react';
import { TransactionsContainer } from './style';
import { FiArrowLeft } from 'react-icons/fi';

interface TransactionsProps {
  func: Function;
}

const Transactions: React.FC<TransactionsProps> = ( props ) => {
  return (
    <TransactionsContainer>
      <FiArrowLeft onClick={() => {props.func('')}}/>
      <p>Transações</p>
    </TransactionsContainer>
  );
}

export default Transactions;