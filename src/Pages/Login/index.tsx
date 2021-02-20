import React, { FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'

import { Container, Form, FormTitle, FormInput } from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';

import api from '../../services/api';
import { UserResponse } from '../../types/user';

const Login: React.FC = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    // TODO

    // API Request
    try {
      const { data: response, status } = await api.post<UserResponse>('/login', {
        "usuario": username,
        "senha": password
      });

      if (status !== 200) throw new Error('Something went wrong with request');

      localStorage.setItem('@token_user', response.token);

      history.push('/dashboard');
    }
    catch (err) {
      console.log(err);
      history.push('/error');
    }

  }, [username, password, history]);

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit} >
          <FormTitle>Faça o login</FormTitle>

          <FormInput value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu usuário" />
          <FormInput value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" type="password" />

          <Button
            type="submit"
            text="Continuar"
            Icon={FaArrowRight}
            className="form-button"
          />

          <Link to="/recover">Esqueci minha senha</Link>
          <Link to="/">Ainda não sou cliente</Link>
        </Form>
      </Container>
    </>
  );
}

export default Login;