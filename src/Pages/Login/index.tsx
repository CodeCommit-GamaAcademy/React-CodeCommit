import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Form } from '@unform/web';

import { Container, FormTitle } from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';

import api from '../../services/api';
import { UserResponse } from '../../types/user';
import updateReduxState from '../../services/updateReduxState';
import Loader from '../../components/Loader';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data: object) => {
    setLoading(true);

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
      localStorage.setItem('@user_name', response.usuario.nome);
      updateReduxState();

      history.push('/dashboard');
    }
    catch (err) {
      console.log(err);
      history.push('/error');
    } finally {
      setLoading(false);
    }

  }, [username, password, history]);

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit} >
          <FormTitle>Faça o login</FormTitle>

          <Input name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu usuário" />
          <Input name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" type="password" />

          {loading ? <Loader /> : <Button
            type="submit"
            text="Continuar"
            Icon={FaArrowRight}
            className="form-button"
          />
          }

          <Link to="/recover">Esqueci minha senha</Link>
          <Link to="/">Ainda não sou cliente</Link>
        </Form>
      </Container>
    </>
  );
}

export default Login;