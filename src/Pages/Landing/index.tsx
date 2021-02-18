import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
  
import { Container, TextContainer, Button, LogoGama, CardLeft, CardRight, FormInput, FormHomeTitle,
  HomeFormButton, Section2, LeftContainer, RightContainer, Section3, LeftSide, RightSide, Section4,
  TextSection4, Section5, TextSide, ImageSide } from './styles';

import Logo from '../../assets/main-logo.png';

import Landing3 from '../../assets/landing-3.png';


const Landing: React.FC = () => {
  return (
    <>
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
    <Section2>
      <LeftContainer>
        <span>Conta digital do Gama Academy</span>
        <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
      </LeftContainer>
      <RightContainer>
        <span>Cartão de Crédito</span>
        <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
      </RightContainer>
    </Section2>
    <Section3>
        <LeftSide>
          <span>Zero anuidade</span>
          <p>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</p>
        </LeftSide>  
        <RightSide>
          <span>0,00</span>
        </RightSide>
    </Section3>
    <Section4>
      <TextSection4>
        <span>O fim da complexibilidade</span>
        <p>Para quem sabe que tecnologia e design são melhores do que agências e papelada.</p>
      </TextSection4>
    </Section4>
    <Section5>
      <TextSide>
        <span>Simplifique a sua vida. Peça seu convite.</span>
        <p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00</p>
        <b/>
        <p>Rua Fictícia, 999 - 00000-000 - São Paulo, SP</p>
        <p>Este é um projeto de avaliação | GamaAcademy | Accenture | 2021</p>
      </TextSide>
      <ImageSide>
        <img src={Landing3} alt="cel"/>
      </ImageSide>
    </Section5>
    </>
  );
}

export default Landing;