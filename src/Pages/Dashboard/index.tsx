import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogOut, FiAlignRight } from 'react-icons/fi';
import { DashMenu, DashBoard, DashMain, LogOutButton, DashBoardMobile, SandwichDiv } from './style';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import CardMenu from '../../components/CardMenu';
import Deposit from '../../components/Deposit';
import Payments from '../../components/Payments';
import Plans from '../../components/Plans';
import Transactions from '../../components/Transactions';
import { useDispatch } from 'react-redux';
import { remove_user } from '../../store/user/actions';
import MenuModal from '../../components/MenuModal'

interface Actual {
  componentName: string,
  isActual: boolean,
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [ actual, setActual ] = useState<Actual>({
    componentName: 'Transações',
    isActual: true,
  });
  const [modalIsOpen,setIsOpen] = React.useState(false);


  //Setting data accounts;
  const changeComponent = useCallback((title: string) => {
    setActual({
      componentName: title,
      isActual: true,
    });
  }, []);

  const handleLogOut = useCallback(() => {
    dispatch(remove_user());

    history.push('/');
  }, [ dispatch, history ]);

  function setModal() { 
    setIsOpen(true);
  }

  return (
    <>
            <DashBoardMobile>
        <img className="logo" src={gamaIcon} alt="Gama icon"/>
        <SandwichDiv>
        <FiAlignRight color="#fff" size={ 60 } onClick={() => setModal()} ></FiAlignRight>
        </SandwichDiv>
        {modalIsOpen && (
        <MenuModal>
          <CardMenu title = 'Depósitos' func={changeComponent}/>
          <CardMenu title = 'Planos' func={changeComponent}/>
          <CardMenu title = 'Pagamentos' func={changeComponent}/>
          <CardMenu title = 'Transações' func={changeComponent}/>
        </MenuModal>
      )}
      </DashBoardMobile> 
    <DashBoard>
      <DashMenu>
        <img className="logo" src={gamaIcon} alt="Gama icon"/>
        <CardMenu title = 'Depósitos' func={changeComponent}/>
        <CardMenu title = 'Planos' func={changeComponent}/>
        <CardMenu title = 'Pagamentos' func={changeComponent}/>
        <CardMenu title = 'Transações' func={changeComponent}/>

        <LogOutButton onClick={ handleLogOut } >
          <FiLogOut color="#fff" size={ 20 } />
        </LogOutButton>

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
</>
  );
}

export default Dashboard;