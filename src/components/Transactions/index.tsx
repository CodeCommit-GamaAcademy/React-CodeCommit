import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';

import { MdCached } from 'react-icons/md';

import { TransactionsContainer, MonthConatiner } from './style';
import { Contas, Lancamento } from '../../types/dash-board';
import Balance from '../Balance';
import Extract from '../Extract';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';

const Transactions: React.FC = () => {

  const [ contas, setContas ] = useState<Contas>();
  const [ loaded, setLoaded ] = useState(false);
  const [ referenceDate, setReferenceDate ] = useState(1);
  const store = useSelector( (state: ApplicationStore) => state.user );


  function formatDate(date:string) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  const getDashboardValues = async() => {
    const date = new Date();
    const newD = new Date();
    const newDate = new Date(date.setMonth(date.getMonth()-referenceDate));
    
    
    const dateFormated = (newD.getFullYear() + "-" + ((newD.getMonth() + 1)) + "-" + (newD.getDate() ));
    const newDateFormated = (newDate.getFullYear() + "-" + ((newDate.getMonth() + 1)) + "-" + (newDate.getDate() ));
    
    const result = await api.get(`/dashboard?fim=${formatDate(dateFormated)}&inicio=${formatDate(newDateFormated)}&login=${store?.login}`, {
      headers: {
        Authorization: store?.token,
      }
    });

    console.log(result.data);
    setContas(result.data);
    setLoaded(true);
  };

  useEffect( ()=> {
    getDashboardValues();
  }, [ store?.token, referenceDate ]);

  const updateReference = (event:ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > 0 && value <= 12) 
      setReferenceDate(value);
  } 

  if ( loaded )return (
    <TransactionsContainer>
      {/* Componente para página principal */}      

      <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>

      <MonthConatiner>
        <p>Escolhe o <strong>mês</strong> de referência: </p>
        <input  type="number" min={1} max={12} value={referenceDate} onChange={updateReference}/>
      </MonthConatiner>

      <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>
      {/* <FiArrowLeft onClick={() => {props.func('')}}/> */}

    </TransactionsContainer>
  );
  else return <MdCached style={{ color: '#fff' }} size={ 200 } />
  
}

export default Transactions;