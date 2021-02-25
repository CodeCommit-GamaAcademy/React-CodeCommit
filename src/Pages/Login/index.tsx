import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Form } from '@unform/web';
import * as yup from 'yup';

import { Container, FormTitle } from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';

import api from '../../services/api';
import { UserResponse } from '../../types/user';
import updateReduxState from '../../services/updateReduxState';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    setLoading(true);
    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        username: yup.string().required('Nome de usuário obrigatório '),
        password: yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false
      })

      const { data: response } = await api.post<UserResponse>('/login', {
        "usuario": username,
        "senha": password
      });

      localStorage.setItem('@token_user', response.token);
      localStorage.setItem('@user_name', response.usuario.nome);
      updateReduxState();

      history.push('/dashboard');
    }
    catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
      if (Object.keys(err).includes('isAxiosError')) {
        history.push('/error');
      }
    } finally {
      setLoading(false);
    }

  }, [username, password, history]);

  return (
    <>
      <Header />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormTitle>Faça o login</FormTitle>

          <Input name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu usuário" autoFocus />
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