import React, { useState, FormEvent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import {
  Container, MainBanner, MainBannerContent, Form, MainBannerContentLeft, MainBannerContentRight,
  TextContainer, Button, FormInput, FormHomeTitle, SectionAbout, SectionAboutContainer, SectionAboutContent, SectionAnnuity, SectionAnnuityContent, SectionBannerInfo, SectionBannerInfoContent, SectionBannerInfoText,
  HomeFormButton, LeftContainer, RightContainer, LeftSide, RightSide,
  Section5, TextSide, ImageSide
} from './styles';

import Landing3 from '../../assets/landing-3.png';
import api from '../../services/api';
import Header from '../../components/Header';


const Landing: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory()


  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    // TODO
    if (password !== confirmPassword) {
      return;
    }

    //API Request
    const { status } = await api.post('/usuarios', {
      "cpf": cpf,
      "login": username,
      "nome": name,
      "senha": password,
    });

    if (status === 200 || status === 201) {
      history.push('/login');
    } else {
      history.push('/error');
    }
  }, [cpf, username, name, password, history, confirmPassword]);

  return (
    <>
      <Header />

      <MainBanner>
        <Container>
          <MainBannerContent>
            <MainBannerContentLeft>
              <TextContainer>
                <p>Gama Bank é um projeto de nossos alunos.
                <span> Já tem conta?</span></p>
              </TextContainer>
              <Button onClick={() => history.push('/login')}>Acessar <FaArrowRight /></Button>
            </MainBannerContentLeft>

            <MainBannerContentRight>
              <Form onSubmit={handleSubmit}>
                <FormHomeTitle> Peça sua conta e cartão de crédito do Gama Bank</FormHomeTitle>
                <FormInput onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF" />
                <FormInput onChange={e => setUsername(e.target.value)} placeholder="Escolha um nome de usuário" />
                <FormInput onChange={e => setName(e.target.value)} placeholder="Nome completo" />
                <FormInput type="password" onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha " />
                <FormInput type="password" onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme sua senha" />
                <HomeFormButton> Continuar <FaArrowRight className="ArrowRight" /></HomeFormButton>
              </Form>
            </MainBannerContentRight>
          </MainBannerContent>
        </Container>
      </MainBanner>

      <SectionAbout>
        <SectionAboutContainer>
          <SectionAboutContent>
            <LeftContainer>
              <span>Conta digital do Gama Academy</span>
              <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
            </LeftContainer>
            <RightContainer>
              <span>Cartão de Crédito</span>
              <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
            </RightContainer>
          </SectionAboutContent>
        </SectionAboutContainer>
      </SectionAbout>

      <SectionAnnuity>
        <Container>
          <SectionAnnuityContent>
            <LeftSide>
              <span>Zero anuidade</span>
              <p>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</p>
            </LeftSide>
            <RightSide>
              <span>0,00</span>
            </RightSide>
          </SectionAnnuityContent>
        </Container>
      </SectionAnnuity>


      <SectionBannerInfo>
        <Container>
          <SectionBannerInfoContent>
            <SectionBannerInfoText>
              <span>O fim da complexibilidade</span>
              <p>Para quem sabe que tecnologia e design são melhores do que agências e papelada.</p>
            </SectionBannerInfoText>
          </SectionBannerInfoContent>
        </Container>
      </SectionBannerInfo>

      {/* <Section5>
        <TextSide>
          <span>Simplifique a sua vida. Peça seu convite.</span>
          <p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00</p>
          <b />
          <p>Rua Fictícia, 999 - 00000-000 - São Paulo, SP</p>
          <p>Este é um projeto de avaliação | GamaAcademy | Accenture | 2021</p>
        </TextSide>
        <ImageSide>
          <img src={Landing3} alt="cel" />
        </ImageSide>
      </Section5> */}
    </>
  );
}

export default Landing;