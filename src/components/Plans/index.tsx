import React, { useEffect, useState } from 'react';
import { PlansContainer, CardPlans } from './style';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import api from '../../services/api';
import { Plano } from '../../types/dash-board';
import { MdCached, MdAdd } from 'react-icons/md';


const Plans: React.FC = () => {
  const store = useSelector( (state: ApplicationStore) => state.user );
  const [ plans, setPlans ] = useState<Plano[]>();
  const [ loaded, setLoaded ] = useState(false);

  useEffect( () => {
    const getAccountPlans = async () => {
      const result = await api.get(`/lancamentos/planos-conta?login=${store?.login}`, {
        headers: {
          Authorization: store?.token,
        }
      });
      setPlans(result.data);
      setLoaded(true);
    }

    getAccountPlans();
  }, [ store?.login, store?.token ]);

  if (loaded) return (
    <PlansContainer>

      {plans?.map( (plan, index) => {
        return ( 
        <CardPlans key={ index }>
          <p className="title-card">{plan.descricao}</p>
          <p>{plan.login}</p>
          <p className="type-movement">
            Movimentação tipo: <span>{plan.tipoMovimento}</span>
          </p>
        </CardPlans>);
      })}

      <CardPlans
        className="addCard"
      >
        <MdAdd className="icon" size={ 50 } />
      </CardPlans>

    </PlansContainer>
  );
  else return <MdCached color="#f0f0f0" size={ 200 } />
}

export default Plans;