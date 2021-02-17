import React, { FormEvent, useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Logo from '../../assets/main-logo.png';

import { Container, Form, FormDescription, FormTitle, Input, InputFields, MainLogo, SubmitButton } from './styles';

const RecoverPassword: React.FC = () => {
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);

    return (
        <Container>
            <MainLogo src={ Logo } alt="Main Logo" />

            <Form onSubmit={ handleSubmit } >
                <FormTitle>Esqueci minha senha</FormTitle>
                <FormDescription>Confirme seu CPF e escolha uma nova senha</FormDescription>

                <InputFields>
                    <Input type="text" placeholder="Confirme seu CPF" />
                    <Input type="text" placeholder="Digite sua nova senha" />
                    <Input type="text" placeholder="Confirme sua nova senha" />
                </InputFields>

                <SubmitButton>
                    <span>Enviar</span>
                    <FaArrowRight size={20} color="#fff" />
                </SubmitButton>
            </Form>
        </Container>
    );
}

export default RecoverPassword;