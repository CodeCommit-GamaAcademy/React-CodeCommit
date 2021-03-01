import React, { HTMLAttributes } from 'react';

import { Container, Button, ButtonWrapper } from './styles';

interface ExitModalProps extends HTMLAttributes<HTMLDivElement> {
    setResponse: (accepted: boolean) => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ setResponse, ...props }) => {
    return (
        <Container {...props} >
            <ButtonWrapper>
                <h1>Tem certeza que deseja sair?</h1>

                <div>
                    <Button onClick={() => setResponse(false)} >Cancelar</Button>
                    <Button onClick={() => setResponse(true)} isAcceptButton >Tenho</Button>
                </div>
            </ButtonWrapper>
        </Container>
    );
}

export default ExitModal;