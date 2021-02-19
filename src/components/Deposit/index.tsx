import React from 'react';
import { DepositContainer } from './style';
import { FiArrowRight } from 'react-icons/fi';

// import { Container } from './styles';

interface DepositProps {
  func: Function;
}

const Deposit: React.FC<DepositProps> = ( props ) => {
  
  return (
    <DepositContainer>
      <p>Realize seu depósito</p>
      <form>
        <label>
          <input type="date" name=""/>
          <hr/>
        </label>
        <label>
          <input type="text" name="" placeholder="Descrição"/>
          <hr/>
        </label>
        <label>
          <input type="text" name="" placeholder="Qual o valor da sua transferência?"/>
          <hr/>
        </label>
        <button type="submit">
          <div>
            <p>Trasferir agora</p>
            <FiArrowRight />
          </div>
        </button>
      </form>
    </DepositContainer>
  );
}

export default Deposit;