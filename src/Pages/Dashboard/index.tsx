import React, { useState, useEffect } from 'react';
import Balance from '../../components/Balance';
import { useHistory } from 'react-router-dom';
import { DashMenu, DashBoard, DashMain } from './style';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import Extract from '../../components/Extract';
import CardMenu from '../../components/CardMenu';
import { FiExternalLink } from 'react-icons/fi';
// import api from '../../services/api';
import { Conta, Lancamento } from '../../types/dash-board';
import Deposit from '../../components/Deposit';
import Payments from '../../components/Payments';
import Plans from '../../components/Plans';
import Transactions from '../../components/Transactions';

// import { Container } from './styles';

interface Contas {
  contaBanco: Conta,
  contaCredito: Conta,
}

interface Actual {
  componentName: string,
  isActual: boolean,
}

const Dashboard: React.FC = () => {
  const [ contas, setContas ] = useState<Contas>();
  const [ actual, setActual ] = useState<Actual>({
    componentName: '',
    isActual: true,
  });
  const auth = localStorage.getItem('@token_user');
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();
  
  const exit = () => {
    history.push('/login');
  }
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

      setContas(refactoredData);
      setLoaded(true);
  }, [ auth ]);

  const changeComponent = (title: string) => {
    if (title === '') {
      setActual({
        componentName: '',
        isActual: true,
      });  
    }else {
      setActual({
        componentName: title,
        isActual: true,
      });
    }
  }

  return (
    <DashBoard>
      <DashMenu>
        <img onClick={()=> {
          setActual({
            componentName: '',
            isActual: true,
          })
        }} className="logo" src={gamaIcon} alt="Gama icon"/>
        <CardMenu title = 'Depósitos' func={changeComponent}/>
        <CardMenu title = 'Planos' func={changeComponent}/>
        <CardMenu title = 'Pagamentos' func={changeComponent}/>
        <CardMenu title = 'Transações' func={changeComponent}/>
        <div className='exit'>
          <FiExternalLink onClick={ exit }/>
        </div>
      </DashMenu>
      <DashMain>
        {/* Componente para página principal */}
        {loaded && actual.componentName === '' && actual.isActual && <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>}
        {loaded && actual.componentName === '' && actual.isActual && <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>}
        {/* Componente para depósitos */}
        {loaded && actual.componentName === 'Depósitos' && actual.isActual && <Deposit func={changeComponent}></Deposit>}
        {/* Componente para pagamentos */}  
        {loaded && actual.componentName === 'Pagamentos' && actual.isActual && <Payments func={changeComponent}></Payments>}
        {/* Componente para planos */}  
        {loaded && actual.componentName === 'Planos' && actual.isActual && <Plans func={changeComponent}></Plans>}
        {/* Componente para transações */}  
        {loaded && actual.componentName === 'Transações' && actual.isActual && <Transactions func={changeComponent}></Transactions>}
      </DashMain>
    </DashBoard>
  );
}

export default Dashboard;