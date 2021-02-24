import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaRegSadTear } from 'react-icons/fa';
import Button from '../../components/Button/';
import Header from '../../components/Header';

import { Container, Content } from './styles';

const ErrorRecover: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <FaRegSadTear className="icon" size={102} />
          <h3>Oops, algo deu errado! Confime seus dados e tente novamente!</h3>
          <Button
            onSubmit={() => { }}
            text="Voltar"
            Icon={FaArrowLeft}
            className="form-button"
          />
        </Content>
      </Container>
    </>
  );
}

export default ErrorRecover;