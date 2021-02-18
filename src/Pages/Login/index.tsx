import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'

import Logo from '../../assets/main-logo.png';

import { Container, Img, Form, FormTitle, FormInput, FormButtonSubmit } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Img src={Logo} alt="Logo principal" />

      <Form>
        <FormTitle>Faça o login</FormTitle>

        <FormInput placeholder="Digite seu usuário" />
        <FormInput placeholder="Digite sua senha" type="password" />

        <FormButtonSubmit>
          Continuar
          <FaArrowRight />
        </FormButtonSubmit>

        <Link to="#">Esqueci minha senha</Link>
        <Link to="#">Ainda não sou cliente</Link>

      </Form>
    </Container>
  );
}

export default Login;