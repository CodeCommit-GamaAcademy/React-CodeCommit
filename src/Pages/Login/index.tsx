import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'

import Logo from '../../assets/main-logo.png';

import { Container, Img, Form, FormTitle, FormInput } from './styles';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <Img src={Logo} alt="Logo principal" />

      <Form>
        <FormTitle>Faça o login</FormTitle>

        <FormInput placeholder="Digite seu usuário" />
        <FormInput placeholder="Digite sua senha" type="password" />

        <Button 
          type="submit" 
          text="Continuar" 
          Icon={ FaArrowRight }
          className="form-button"
        />

        <Link to="/recover">Esqueci minha senha</Link>
        <Link to="/">Ainda não sou cliente</Link>

      </Form>
    </Container>
  );
}

export default Login;