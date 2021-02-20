import React, { useState, FormEvent, useCallback, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import {
  Container, Button,
  MainBanner, MainBannerContent, MainBannerContentLeft, MainBannerContentText, MainBannerContentRight, Form, FormHomeTitle, FormInput, HomeFormButton,
  SectionAbout, SectionAboutContainer, SectionAboutContent, SectionAboutContentLeft, SectionAboutContentRight,
  SectionAnnuity, SectionAnnuityContent, SectionAnnuityContentLeft, SectionAnnuityContentRight,
  SectionBannerInfo, SectionBannerInfoContent, SectionBannerInfoText,
  SectionAccount, SectionAccountContent, SectionAccountContentText, SectionAccountContentImg
} from './styles';

import ImgCellPhone from '../../assets/landing-3.png';
import api from '../../services/api';
import Header from '../../components/Header';
import getIsAuth from '../../services/getIsAuth';
import { maskCPF, removeMaskCPF } from '../../utils/mask';

const Landing: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [ cpfMask, setCpfMask ] = useState('');

  useEffect(() => {
    setCpf( removeMaskCPF( cpfMask ) );
  }, [ cpfMask ]);

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

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

  // Check if user is authenticated
  const handleRedirectToLogin = useCallback(() => {
    const isAuth = getIsAuth();

    if ( isAuth ) history.push('/dashboard');
    else history.push('/login');
  }, [ history ]);

  const handleSetCpfMask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCpfMask( 
      maskCPF( 
        removeMaskCPF( e.target.value )
      ) 
    );
  }, []);

  return (
    <>
      <Header />

      <MainBanner>
        <Container>
          <MainBannerContent>
            <MainBannerContentLeft>
              <MainBannerContentText>
                <p>Gama Bank é um projeto de nossos alunos.
                <span> Já tem conta?</span></p>
              </MainBannerContentText>
              <Button onClick={handleRedirectToLogin}>Acessar <FaArrowRight /></Button>
            </MainBannerContentLeft>

            <MainBannerContentRight>
              <Form onSubmit={handleSubmit}>
                <FormHomeTitle> Peça sua conta e cartão de crédito do Gama Bank</FormHomeTitle>
                <FormInput maxLength={ 14 } value={ cpfMask } onChange={ handleSetCpfMask } placeholder="Digite seu CPF" />
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
            <SectionAboutContentLeft>
              <span>Conta digital do Gama Academy</span>
              <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
            </SectionAboutContentLeft>
            <SectionAboutContentRight>
              <span>Cartão de Crédito</span>
              <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
            </SectionAboutContentRight>
          </SectionAboutContent>
        </SectionAboutContainer>
      </SectionAbout>

      <SectionAnnuity>
        <Container>
          <SectionAnnuityContent>
            <SectionAnnuityContentLeft>
              <span>Zero anuidade</span>
              <p>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</p>
            </SectionAnnuityContentLeft>
            <SectionAnnuityContentRight>
              <span>0,00</span>
            </SectionAnnuityContentRight>
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

      <SectionAccount>
        <Container>
          <SectionAccountContent>
            <SectionAccountContentText>
              <span>Simplifique a sua vida. Peça seu convite.</span>
              <p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00</p>

              <p>Rua Fictícia, 999 - 00000-000 - São Paulo, SP</p>
              <p>Este é um projeto de avaliação | GamaAcademy | Accenture | 2021</p>
            </SectionAccountContentText>
            <SectionAccountContentImg>
              <img src={ImgCellPhone} alt="Imagem de um celular" />
            </SectionAccountContentImg>
          </SectionAccountContent>
        </Container>
      </SectionAccount>
    </>
  );
}

export default Landing;