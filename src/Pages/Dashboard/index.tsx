import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DashMenu, DashBoard, DashMain } from './style';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import CardMenu from '../../components/CardMenu';
import { FiExternalLink } from 'react-icons/fi';
import Deposit from '../../components/Deposit';
import Payments from '../../components/Payments';
import Plans from '../../components/Plans';
import Transactions from '../../components/Transactions';

interface Actual {
  componentName: string,
  isActual: boolean,
}

const Dashboard: React.FC = () => {
  const [ actual, setActual ] = useState<Actual>({
    componentName: '',
    isActual: true,
  });
  const history = useHistory();
  
  const exit = () => {
    history.push('/');
  }
  //Setting data accounts;


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
        {/* Componente para depósitos */}
        {actual.componentName === 'Depósitos' && actual.isActual && <Deposit func={changeComponent}></Deposit>}
        {/* Componente para pagamentos */}  
        {actual.componentName === 'Pagamentos' && actual.isActual && <Payments func={changeComponent}></Payments>}
        {/* Componente para planos */}  
        {actual.componentName === 'Planos' && actual.isActual && <Plans func={changeComponent}></Plans>}
        {/* Componente para transações */}  
        {actual.componentName === 'Transações' && actual.isActual && <Transactions></Transactions>}
      </DashMain>
    </DashBoard>
  );
}

export default Dashboard;