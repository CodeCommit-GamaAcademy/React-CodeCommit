import React, { useState, useEffect } from 'react';
import { BalanceContainer, BalanceItem } from './style';
import currentIcon from '../../assets/svgs/current-icon.svg';
import creditIcon from '../../assets/svgs/credit-card-icon.svg';
import { Conta } from '../../types/dash-board';

interface Total {
  banco: number,
  credito: number,
}

interface AccountProps {
  contaBanco?: Conta,
  contaCredito?: Conta,
}

const Balance: React.FC<AccountProps> = ( props ) => {
  const [contaBanco, setContaBanco] = useState<Conta>();
  const [contaCredito, setContaCredito] = useState<Conta>();
  const [totalTransactions, setTotalTransactions] = useState<Total>({
    banco: 0,
    credito: 0,
  })

  useEffect( () => {
    console.log(props);
    
    setContaBanco(props.contaBanco);
    setContaCredito(props.contaCredito);
    setTotalTransactions({
      banco: 0,
      credito: 0,
    });
    contaBanco?.lancamentos.forEach( lancamento => {

      setTotalTransactions({
        ...totalTransactions,
        banco: totalTransactions.banco += lancamento.valor
      });
    });

    contaCredito?.lancamentos.forEach( lancamento => {

      setTotalTransactions({
        ...totalTransactions,
        credito: totalTransactions.credito += lancamento.valor
      });
    })
  }, [])

  return (
    <BalanceContainer>
      <BalanceItem>
        <div className='title'>
          <img src={currentIcon} alt="current icon"/>
          <p>Conta</p>
        </div>
        <p>Saldo disponivel</p>
        <h3 className='value acccount'>{contaBanco?.saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        <div>
          <p>Transações</p>
          <h3>{totalTransactions.banco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </div>
      </BalanceItem>
      <BalanceItem>
        {/*  */}
        <div className='title'>
          <img src={creditIcon} alt="current icon"/>
          <p>Conta Crédito</p>
        </div>
        <p>Fatura atual</p>
        <h3 className='value credit'>{contaCredito?.saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        <div>
          <p>Limite Disponivel</p>
          <h3>{totalTransactions.credito.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </div>
      </BalanceItem>
    </BalanceContainer>
  );
}

export default Balance;