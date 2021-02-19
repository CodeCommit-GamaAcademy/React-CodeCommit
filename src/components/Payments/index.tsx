import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa'

import { PaymentsContainer, Form, FormInput, Button } from './style';

interface PaymentsProps {
  func: Function;
}

const Payments: React.FC<PaymentsProps> = ( props ) => {
  return (
    <>
      <FiArrowLeft onClick={() => {props.func('')}}/>
      <p>Pagamentos</p>
      <PaymentsContainer>

        <Form>
          <p>
            Informe os dados para realizar sua transferência
          </p>

          <FormInput type="text" placeholder="Login do destinatário" />
          <FormInput type="date" />
          <FormInput type="text" placeholder="Descrição" />
          <FormInput type="text" placeholder="Qual o valor de sua transferência?" />

          <Button>
            <span>Transferir agora</span>
            <FaArrowRight color="#8c52e5"/>
          </Button>
        </Form>


      </PaymentsContainer>
    </>
  );
}

export default Payments;