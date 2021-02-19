import React, { useState, useEffect } from 'react';
import Balance from '../../components/Balance';
import { DashMenu, DashBoard, DashMain, DashNameSection } from './style';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import eyeIcon from '../../assets/svgs/eye-icon.svg';
import Extract from '../../components/Extract';
import CardMenu from '../../components/CardMenu';
import api from '../../services/api';
import { Conta, Lancamento } from '../../types/dash-board';

// import { Container } from './styles';

interface Contas {
  contaBanco: Conta,
  contaCredito: Conta,
}

const Dashboard: React.FC = () => {
  const [ contas, setContas ] = useState<Contas>();
  const auth = localStorage.getItem('@token_user');
  const [loaded, setLoaded] = useState(false);
  
  //Setting data accounts;
  useEffect( ()=> {
    // api.get<Contas>('/dashboard?fim=2021-02-18&inicio=2021-01-01&login=gabrielggpm', {
    //   headers: {Authorization: auth}
    // }).then( (resp) => {
      
    // });
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

      console.log( refactoredData );

      setContas(refactoredData);
      setLoaded(true);
  }, [ auth ]);

  const hideOrShowInformations = () => {
    
  }

  return (
    <DashBoard>
      <DashMenu>
        <img className="logo" src={gamaIcon} alt="Gama icon"/>
        <CardMenu title = 'Depósitos'/>
        <CardMenu title = 'Planos'/>
        <CardMenu title = 'Pagamentos'/>
        <CardMenu title = 'Transações'/>
      </DashMenu>
      <DashMain>
        <DashNameSection>
          <div>
            <p>Olá <strong>Usuário</strong>, seja bem vindo!</p>
            <img onClick={hideOrShowInformations} src={eyeIcon} alt="hide informations"/>
          </div>
        </DashNameSection>
        {loaded && <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>}
        {loaded && <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>}
      </DashMain>
    </DashBoard>
  );
}

export default Dashboard;