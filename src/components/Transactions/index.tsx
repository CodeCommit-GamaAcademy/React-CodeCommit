import React, { useState, useEffect } from 'react';
import { TransactionsContainer } from './style';
import { Contas, Lancamento } from '../../types/dash-board';
import Balance from '../Balance';
import Extract from '../Extract';

const Transactions: React.FC = () => {

  const [ contas, setContas ] = useState<Contas>();
  const [loaded, setLoaded] = useState(false);
  const auth = localStorage.getItem('@token_user');

  useEffect( ()=> {

    const transacaoCredito: Lancamento = {
      tipo: 'teste',
      conta: 1,
      data: 'teste',
      descricao: 'teste',
      id: 1,
      planoConta: {
        descricao: 'teste',
        id: 1,
        login: 'teste',
        padrao: false,
        tipoMovimento: 'R'
      },
      valor: 10
    }
    const transacaoDebito: Lancamento = {
      tipo: 'teste',
      conta: 1,
      data: 'teste',
      descricao: 'teste',
      id: 1,
      planoConta: {
        descricao: 'teste',
        id: 1,
        login: 'teste',
        padrao: false,
        tipoMovimento: 'R'
      },
      valor: 10
    }

    const INITIAL_LAUNCHS = [
      transacaoCredito,
      transacaoDebito
    ]

    const refactoredData: Contas = {
      contaBanco: {
        id: 1,
        saldo: 0,
        lancamentos: INITIAL_LAUNCHS.map( lancamento => ({ ...lancamento, tipo: 'débito' }) )
      },
      contaCredito: {
        id: 1,
        saldo: 0,
        lancamentos: INITIAL_LAUNCHS.map( lancamento => ({ ...lancamento, tipo: 'crédito' }) )
      }
    }

    setContas(refactoredData);
    setLoaded(true);
  }, [ auth ]);

  return (
    <TransactionsContainer>
      {/* Componente para página principal */}
      {loaded && <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>}
      {loaded && <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>}
      {/* <FiArrowLeft onClick={() => {props.func('')}}/> */}
    </TransactionsContainer>
  );
}

export default Transactions;