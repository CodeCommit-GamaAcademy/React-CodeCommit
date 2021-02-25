import React, { useCallback, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import api from '../../services/api';

import { Container, FormDescription, FormTitle, FormBoxInput } from './styles';

const RecoverPassword: React.FC = () => {
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [temporaryPassword, setTemporaryPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmitUsername = useCallback(async (data: object) => {
        setLoading(true);
        try {
            const { status, data } = await api.post('/nova-senha', {
                "email": 'email@email.com',
                "login": username,
            });

            if (status === 200 || status === 201) {
                setTemporaryPassword(data);
                setIsValidUsername(true);
            } else {
                history.push('/error');
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, [username, history]);

    const handleSubmitNewPassword = useCallback(async (data: object) => {
        setLoading(true);

        try {
            if (password !== confirmPassword) {
                // Validation TO DO
                return;
            }

            const data = await api.post(`altera-senha?senhaTemporaria=${temporaryPassword}`, {
                "senha": password,
                "usuario": username,
            });

            if (data.status === 200 || data.status === 201) {
                history.push('/login');
            } else {
                history.push('/error');
            }

            console.log(data);
        } catch (err) {

        } finally {
            setLoading(false);
        }

    }, [username, password, confirmPassword, temporaryPassword, history]);


    return (
        <>
            <Header />

            <Container>
                {isValidUsername ? (
                    <Form onSubmit={handleSubmitNewPassword}>
                        <FormTitle>Esqueci minha senha</FormTitle>
                        <FormDescription>Confirme seu nome de usuário e escolha uma nova senha</FormDescription>

                        <FormBoxInput className="has-animation">
                            <Input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua nova senha" autoFocus />
                            <Input name="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme sua nova senha" />
                        </FormBoxInput>

                        {loading ? <Loader /> : <Button
                            text="Enviar"
                            Icon={FaArrowRight}
                            type="submit"
                            style={{ marginTop: 28 }}
                        />}
                    </Form>
                ) : (
                        <Form onSubmit={handleSubmitUsername} >
                            <FormTitle>Esqueci minha senha</FormTitle>
                            <FormDescription>Confirme seu nome de usuário e escolha uma nova senha</FormDescription>

                            <FormBoxInput>
                                <Input name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Confirme seu nome de usuário" autoFocus />
                            </FormBoxInput>

                            {loading ? <Loader /> : <Button
                                text="Prosseguir"
                                Icon={FaArrowRight}
                                type="submit"
                                style={{ marginTop: 28 }}
                            />}
                        </Form>
                    )}
            </Container>
        </>
    );
}

export default RecoverPassword;