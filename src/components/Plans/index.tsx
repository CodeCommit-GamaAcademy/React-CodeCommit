import React from 'react';
import { PlansContainer, CardPlans } from './style';

interface PlansProps {
  func: Function;
}

const Plans: React.FC<PlansProps> = ( props ) => {
  return (
    <>
      <PlansContainer>
        <CardPlans>
          <p className="title-card">Receitas</p>
          <p>teste 1</p>
          <p className="type-movement">
            Movimentação tipo: <span>R</span>
          </p>
        </CardPlans>
        <CardPlans>
          <p className="title-card">Despesas</p>
          <p>teste 1</p>
          <p className="type-movement">
            Movimentação tipo: <span>D</span>
          </p>
        </CardPlans>
        <CardPlans>
          <p className="title-card">Transf entre contas</p>
          <p>teste 1</p>
          <p className="type-movement">
            Movimentação tipo: <span>TC</span>
          </p>
        </CardPlans>
        <CardPlans>
          <p className="title-card">Transf de usuários</p>
          <p>teste 1</p>
          <p className="type-movement">
            Movimentação tipo: <span>R</span>
          </p>
        </CardPlans>
      </PlansContainer>
    </>
  );
}

export default Plans;