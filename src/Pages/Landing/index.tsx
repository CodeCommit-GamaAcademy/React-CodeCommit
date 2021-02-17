import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
  
import { Container, Header, TextContainer, Button } from './styles';

import Logo from '../../assets/main-logo.png';

const Landing: React.FC = () => {
  return (
    <>
      <Header>
        <img src={Logo} alt="logo"/>
      </Header>
      <Container>
        <TextContainer>
          <p>Gama Bank é um projeto de nossos alunos.</p><br/>
          <p> Já tem conta?</p>
        </TextContainer>
          <Button>Acessar <FaArrowRight /></Button>
      </Container>
    </>
  );
}

export default Landing;