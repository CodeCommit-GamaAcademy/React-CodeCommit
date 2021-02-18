import React, { useState, useEffect } from 'react';
import Balance from '../../components/Balance';
import { DashMenu, DashBoard, DashMain, DashNameSection } from './style';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import eyeIcon from '../../assets/svgs/eye-icon.svg';
import Extract from '../../components/Extract';
import CardMenu from '../../components/CardMenu';
import api from '../../services/api';
import { Conta } from '../../types/dash-board';

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
    api.get<Contas>('/dashboard?fim=2021-02-18&inicio=2021-01-01&login=gabrielggpm', {
      headers: {Authorization:auth}
    }).then( (resp) => {
      setContas(resp.data);
      setLoaded(true);
    });
  }, [])

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
            <img src={eyeIcon} alt="hide informations"/>
          </div>
        </DashNameSection>
        {loaded && <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>}
        {loaded && <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>}
      </DashMain>
    </DashBoard>
  );
}

export default Dashboard;