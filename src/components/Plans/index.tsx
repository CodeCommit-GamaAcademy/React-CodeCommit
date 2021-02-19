import React from 'react';
import { PlansContainer } from './style';
import { FiArrowLeft } from 'react-icons/fi';

interface PlansProps {
  func: Function;
}

const Plans: React.FC<PlansProps> = ( props ) => {
  return (
    <PlansContainer>
      <FiArrowLeft onClick={() => {props.func('')}}/>
      <p>Planos</p>
    </PlansContainer>
  );
}

export default Plans;