import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
  
import { Container, TextContainer, Button, LogoGama, CardLeft, CardRight, FormInput, FormHomeTitle, HomeFormButton } from './styles';

import Logo from '../../assets/main-logo.png';


const Landing: React.FC = () => {
  return (
    <Container>
        <LogoGama src={Logo} alt="logo"/>
        <CardLeft> 
        <TextContainer>
          <p>Gama Bank é um projeto de nossos alunos.
         <span> Já tem conta?</span></p>
        </TextContainer>
          <Button>Acessar <FaArrowRight /></Button>
          </CardLeft>

    <CardRight> 
<FormHomeTitle> Peça sua conta e cartão de crédito do Gama Bank</FormHomeTitle>
<FormInput placeholder="Digite seu CPF" />
<FormInput placeholder="Escolha um nome de usuário" />
<FormInput placeholder="Nome completo" />
<FormInput placeholder="Digite sua senha " />
<FormInput placeholder="Confirme sua senha" />
<HomeFormButton> Continuar <FaArrowRight className="ArrowRight"/></HomeFormButton>
    </CardRight>

      </Container>
  );
}

export default Landing;