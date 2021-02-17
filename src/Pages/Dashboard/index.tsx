import React from 'react';
import Balance from './components/Balance';
import { DashMenu, DashBoard } from './style';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DashBoard>
      <DashMenu>
        {/* Conteúdo do navigation */}
      </DashMenu>
      <Balance />
    </DashBoard>
  );
}

export default Dashboard;