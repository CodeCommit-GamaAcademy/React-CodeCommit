import React, { FormEvent, useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, Form, FormDescription, FormTitle, Input, InputFields } from './styles';

const RecoverPassword: React.FC = () => {
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);

    return (
        <Container>
            <Logo />

            <Form onSubmit={ handleSubmit } >
                <FormTitle>Esqueci minha senha</FormTitle>
                <FormDescription>Confirme seu CPF e escolha uma nova senha</FormDescription>

                <InputFields>
                    <Input type="text" placeholder="Confirme seu CPF" />
                    <Input type="text" placeholder="Digite sua nova senha" />
                    <Input type="text" placeholder="Confirme sua nova senha" />
                </InputFields>

                <Button 
                    text="Enviar" 
                    Icon={ FaArrowRight } 
                    type="submit" 
                    style={{ marginTop: 28 }}
                />
            </Form>
        </Container>
    );
}

export default RecoverPassword;