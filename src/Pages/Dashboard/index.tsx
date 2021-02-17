import React from 'react';
import Balance from './components/Balance';
import { DashMenu, DashBoard, DashMain } from './style';
import gamaIcon from './components/svgs/gama-icon.svg';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DashBoard>
      <DashMenu>
        <img src={gamaIcon} alt="Gama icon"/>
      </DashMenu>
      <DashMain>
        <Balance />
      </DashMain>
    </DashBoard>
  );
}

export default Dashboard;