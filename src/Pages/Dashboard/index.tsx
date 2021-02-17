import React from 'react';
import Balance from './components/Balance';
import { DashMenu, DashBoard, DashMain, DashNameSection } from './style';
import gamaIcon from './components/svgs/gama-icon.svg';
import eyeIcon from './components/svgs/eye-icon.svg';
import Extract from './components/Extract';
import CardMenu from './components/CardMenu';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DashBoard>
      <DashMenu>
        <img className="logo" src={gamaIcon} alt="Gama icon"/>
        <CardMenu />
      </DashMenu>
      <DashMain>
        <DashNameSection>
          <div>
            <p>Olá <strong>Usuário</strong>, seja bem vindo!</p>
            <img src={eyeIcon} alt="hide informations"/>
          </div>
        </DashNameSection>
        <Balance />
        <Extract />
      </DashMain>
    </DashBoard>
  );
}

export default Dashboard;