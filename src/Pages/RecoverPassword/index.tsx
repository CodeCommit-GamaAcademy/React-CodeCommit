import React, { FormEvent, useCallback, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import api from '../../services/api';

import { Container, FormDescription, FormTitle, InputFields } from './styles';

const RecoverPassword: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmitRecover = useCallback(async (data: object) => {
        setLoading(true);

        try {
            if (password !== confirmPassword) {
                console.log('error password equal')
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

        } catch (err) {

        } finally {
            setLoading(false);
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
                        <Input name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Confirme seu nome de usuário" />
                        <Input name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua nova senha" />
                        <Input name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme sua nova senha" />
                    </InputFields>

                    {loading ? <Loader /> : <Button
                        text="Enviar"
                        Icon={FaArrowRight}
                        type="submit"
                        style={{ marginTop: 28 }}
                    />}
                </Form>
            </Container>
        </>
    );
}

export default RecoverPassword;