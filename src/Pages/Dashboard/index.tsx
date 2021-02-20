import React, { useCallback } from 'react';
import Balance from './components/Balance';
import { DashMenu, DashBoard, DashMain, DashNameSection } from './style';
import gamaIcon from './components/svgs/gama-icon.svg';
import eyeIcon from './components/svgs/eye-icon.svg';
import Extract from './components/Extract';
import CardMenu from './components/CardMenu';

import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { remove_user } from '../../store/user/actions';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(remove_user());
  }, [ dispatch ]);

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
            <section className="icons">
              <FiLogOut onClick={ handleLogOut } className="icon" />
              <img src={eyeIcon} alt="hide informations"/>
            </section>
          </div>
        </DashNameSection>
        <Balance />
        <Extract />
      </DashMain>
    </DashBoard>
  );
}

export default Dashboard;