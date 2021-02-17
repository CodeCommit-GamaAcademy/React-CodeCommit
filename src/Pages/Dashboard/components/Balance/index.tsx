import React, { useState, useEffect } from 'react';
import { BalanceContainer, BalanceItem } from './style';
import currentIcon from '../svgs/current-icon.svg';
import creditIcon from '../svgs/credit-card-icon.svg';

interface Plano {
  descricao: string,
  id: number,
  login: string,
  padrao: boolean,
  tipoMovimento: string,
}

interface Lancamento {
  conta: number,
  data: string,
  descricao: string,
  id: number,
  planoConta: Plano,
  tipo: string,
  valor: number,
}

interface Conta {
  id: number,
  lancamentos: Lancamento[],
  saldo: number,
}

interface Total {
  banco: number,
  credito: number,
}

const INITIAL_STATE = {
  id: 0,
  lancamentos: [{
    conta: 0,
    data: '',
    descricao: '',
    id: 0,
    planoConta: {
      descricao: '',
      id: 0,
      login: '',
      padrao: false,
      tipoMovimento: '',
    },
    tipo: '',
    valor: 99999,
  }],
  saldo: 99999,
}

const Balance: React.FC = () => {
  const [contaBanco, setContaBanco] = useState<Conta>(INITIAL_STATE);
  const [contaCredito, setContaCredito] = useState<Conta>(INITIAL_STATE);
  const [totalTransactions, setTotalTransactions] = useState<Total>({
    banco: 0,
    credito: 0,
  })

  const setTotals = () => {
    setTotalTransactions({
      banco: 0,
      credito: 0,
    });
    contaBanco.lancamentos.map( lancamento => {
      setTotalTransactions({
        ...totalTransactions,
        banco: totalTransactions.banco += lancamento.valor
      });
    });
    contaCredito.lancamentos.map( lancamento => {
      setTotalTransactions({
        ...totalTransactions,
        credito: totalTransactions.credito += lancamento.valor
      });
    })
  }
  
  useEffect( () => {
    setTotals();
    console.log(totalTransactions);
    
  }, [ contaCredito, contaBanco ])

  return (
    <BalanceContainer>
      <BalanceItem>
        <div className='title'>
          <img src={currentIcon} alt="current icon"/>
          <p>Conta</p>
        </div>
        <p>Saldo disponivel</p>
        <h3 className='value acccount'>{contaBanco.saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        <div>
          <p>Transações</p>
          <h3>{totalTransactions.banco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </div>
      </BalanceItem>
      <BalanceItem>
        <div className='title'>
          <img src={creditIcon} alt="current icon"/>
          <p>Conta Crédit</p>
        </div>
        <p>Fatura atual</p>
        <h3 className='value credit'>{contaCredito.saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        <div>
          <p>Limite Disponivel</p>
          <h3>{totalTransactions.credito.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </div>
      </BalanceItem>
    </BalanceContainer>
  );
}

export default Balance;