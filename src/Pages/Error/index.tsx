import React, { useCallback } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Container, Content } from './styles';
import Button from '../../components/Button';

const Error: React.FC = () => {
    const history = useHistory();

    const handleGoBack = useCallback(() => {
        history.push('/')
    }, [ history ]);

    return (
        <Container>
            {/* <Logo /> */}

            <Content>
                <FiAlertTriangle className="icon" size={ 102 } />

                <h3>Oops, algo deu errado! Confime seus dados e tente novamente!</h3>

                <Button text="Voltar" Icon={ FaArrowLeft } onClick={ handleGoBack } />
            </Content>
         </Container>
  );
}

export default Error;