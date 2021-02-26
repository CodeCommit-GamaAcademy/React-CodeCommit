import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogOut, FiAlignRight } from 'react-icons/fi';
import { DashMenu, DashBoard, DashMain, LogOutButton, DashBoardMobile, SandwichDiv, ContainerMobile, ExitButton } from './style';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import CardMenu from '../../components/CardMenu';
import CardMenuMobile from '../../components/CardMenuMobile';
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
  const history = useHistory();
  const dispatch = useDispatch();

  const [ actual, setActual ] = useState<Actual>({
    componentName: 'Transações',
    isActual: true,
  });
  const [modalIsOpen,setIsOpen] = React.useState(false);


  //Setting data accounts;
  const changeComponent = useCallback((title: string) => {
    setIsOpen(false);
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
    if(modalIsOpen == true)
    setIsOpen(false);
    else
    setIsOpen(true);
  }

  return (
    <>
            {modalIsOpen && (
          <ContainerMobile onClick={setModal}>

            <CardMenuMobile title = 'Depósitos' func={changeComponent} />
            <CardMenuMobile title = 'Planos' func={changeComponent} />
            <CardMenuMobile title = 'Pagamentos' func={changeComponent}  />
            <CardMenuMobile title = 'Transações' func={changeComponent} />
            <ExitButton onClick={ handleLogOut }> Sair </ExitButton>
            <LogOutButton  >
            <FiLogOut color="#fff" size={ 20 } />
          </LogOutButton>
          </ContainerMobile>
        )}
      <DashBoardMobile>
        <img className="logo" src={gamaIcon} alt="Gama icon"/>
        <SandwichDiv>
        <FiAlignRight color="#fff" size={ 60 } onClick={() => setModal()} ></FiAlignRight>
        </SandwichDiv>

      </DashBoardMobile> 
      <DashBoard>
        <DashMenu>
          <img className="logo" src={gamaIcon} alt="Gama icon" />
          <CardMenu title = 'Depósitos' func={changeComponent} selected={actual.componentName === 'Depósitos' && actual.isActual} />
          <CardMenu title = 'Planos' func={changeComponent} selected={actual.componentName === 'Planos' && actual.isActual} />
          <CardMenu title = 'Pagamentos' func={changeComponent} selected={actual.componentName === 'Pagamentos' && actual.isActual} />
          <CardMenu title = 'Transações' func={changeComponent} selected={actual.componentName === 'Transações' && actual.isActual} />

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