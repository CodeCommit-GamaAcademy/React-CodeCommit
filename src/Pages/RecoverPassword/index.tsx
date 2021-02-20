import React, { FormEvent, useCallback, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container, Form, FormDescription, FormTitle, Input, InputFields } from './styles';

const RecoverPassword: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    const handleSubmitRecover = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return;
        }

        const { status } = await api.post('/altera-senha', {
            "usuario": username,
            "senha": password,
        });

        if (status === 200 || status === 201) {
            history.push('/login');
        } else {
            history.push('/error');
        }

    }, [username, password, confirmPassword, history]);

    return (
        <>
            <Header />

            <Container>
                <Form onSubmit={handleSubmitRecover} >
                    <FormTitle>Esqueci minha senha</FormTitle>
                    <FormDescription>Confirme seu Nome de usuário e escolha uma nova senha</FormDescription>

                    <InputFields>
                        <Input type="text" onChange={e => setUsername(e.target.value)} placeholder="Confirme seu Nome de usuário" />
                        <Input type="text" onChange={e => setPassword(e.target.value)} placeholder="Digite sua nova senha" />
                        <Input type="text" onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme sua nova senha" />
                    </InputFields>

                    <Button
                        text="Enviar"
                        Icon={FaArrowRight}
                        type="submit"
                        style={{ marginTop: 28 }}
                    />
                </Form>
            </Container>
        </>
    );
}

export default RecoverPassword;