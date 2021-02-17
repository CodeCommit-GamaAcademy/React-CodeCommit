import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
  
import { Container, TextContainer, Button, Img, CardLeft } from './styles';

import Logo from '../../assets/main-logo.png';


const Landing: React.FC = () => {
  return (
    <Container>
        <Img src={Logo} alt="logo"/>
        <CardLeft> 
        <TextContainer>
          <p>Gama Bank é um projeto de nossos alunos.
         <span> Já tem conta?</span></p>
        </TextContainer>
          <Button>Acessar <FaArrowRight /></Button>
          </CardLeft>


      </Container>
  );
}

export default Landing;