import React, { useCallback, useState } from 'react';
import { DashMenu, DashBoard, DashMain } from './style';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import CardMenu from '../../components/CardMenu';
import Deposit from '../../components/Deposit';
import Payments from '../../components/Payments';
import Plans from '../../components/Plans';
import Transactions from '../../components/Transactions';
import { useDispatch } from 'react-redux';
import { remove_user } from '../../store/user/actions';

interface Actual {
  componentName: string,
  isActual: boolean,
}

const Dashboard: React.FC = () => {
  
  const [ actual, setActual ] = useState<Actual>({
    componentName: 'Transações',
    isActual: true,
  });

  //Setting data accounts;
  
  
  const changeComponent = (title: string) => {
    setActual({
      componentName: title,
      isActual: true,
    });
  }
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(remove_user());
  }, [ dispatch ]);

  return (
    <DashBoard>
      <DashMenu>
        <img className="logo" src={gamaIcon} alt="Gama icon"/>
        <CardMenu title = 'Depósitos' func={changeComponent}/>
        <CardMenu title = 'Planos' func={changeComponent}/>
        <CardMenu title = 'Pagamentos' func={changeComponent}/>
        <CardMenu title = 'Transações' func={changeComponent}/>
      </DashMenu>
      <DashMain>
        {/* Componente para depósitos */}
        {actual.componentName === 'Depósitos' && actual.isActual && <Deposit />}
        {/* Componente para pagamentos */}  
        {actual.componentName === 'Pagamentos' && actual.isActual && <Payments func={changeComponent}></Payments>}
        {/* Componente para planos */}  
        {actual.componentName === 'Planos' && actual.isActual && <Plans />}
        {/* Componente para transações */}  
        {actual.componentName === 'Transações' && actual.isActual && <Transactions></Transactions>}
      </DashMain>
    </DashBoard>
  );
}

export default Dashboard;