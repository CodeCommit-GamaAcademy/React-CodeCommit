import React from 'react';

import { BalanceContainer, BalanceItem } from './style';

const Balance: React.FC = () => {
  return (
    <BalanceContainer>
      <BalanceItem>
        <img/>
        <p className='title'>Conta</p>
        <p>Saldo disponivel</p>
        <h3 className='value acccount'>R$: 10.000,00</h3>
        <div>
          <p>Transações</p>
          <h3>R$: 2.120,21</h3>
        </div>
      </BalanceItem>
      <BalanceItem>
        <img/>
        <p className='title'>Conta-Crédito</p>
        <p>Fatura atual</p>
        <h3 className='value credit'>R$: 120,88</h3>
        <div>
          <p>Limite Disponivel</p>
          <h3>R$: 9.120,88</h3>
        </div>
      </BalanceItem>
    </BalanceContainer>
  );
}

export default Balance;