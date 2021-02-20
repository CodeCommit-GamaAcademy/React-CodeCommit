import React from 'react';
import { DepositContainer } from './style';
import { FiArrowRight } from 'react-icons/fi';
import { Button, Form, FormInput } from '../Payments/style';
import { FaArrowRight } from 'react-icons/fa';

// import { Container } from './styles';

interface DepositProps {
  func: Function;
}

const Deposit: React.FC<DepositProps> = ( props ) => {
  
  return (
    <DepositContainer>
      <Form>
          <p>
            Realize o seu depósito
          </p>
          <FormInput type="date" />
          <FormInput type="text" placeholder="Descrição" />
          <FormInput type="text" placeholder="Qual o valor de sua transferência?" />

          <Button>
            <span>Depositar agora</span>
            <FaArrowRight color="#8c52e5"/>
          </Button>
        </Form>
    </DepositContainer>
  );
}

export default Deposit;