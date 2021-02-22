import React, { useEffect, useState } from 'react';
import { PlansContainer, CardPlans } from './style';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import api from '../../services/api';
import { Plano } from '../../types/dash-board';


const Plans: React.FC = () => {
  const store = useSelector( (state: ApplicationStore) => state.user );
  const [ plans, setPlans ] = useState<Plano[]>();
  const [ loaded, setLoaded ] = useState(false);

  const accountPlans = async() => {
    const result = await api.get(`/lancamentos/planos-conta?login=${store?.login}`, {
      headers: {
        Authorization: store?.token,
      }
    });
    setPlans(result.data);
    setLoaded(true);
  };

  useEffect( () => {
    accountPlans();
    console.log(store);
  }, [])

  return (
    <>
      <PlansContainer>
        {loaded && plans?.map( (plan) => {
          return ( 
          <CardPlans>
            <p className="title-card">{plan.descricao}</p>
            <p>{plan.login}</p>
            <p className="type-movement">
              Movimentação tipo: <span>{plan.tipoMovimento}</span>
            </p>
          </CardPlans>)
        })}
      </PlansContainer>
    </>
  );
}

export default Plans;