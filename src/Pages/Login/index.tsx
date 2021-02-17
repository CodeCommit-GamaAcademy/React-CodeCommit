import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'

import { Container, Form, FormTitle, FormInput } from './styles';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo />

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