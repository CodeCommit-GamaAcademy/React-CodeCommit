import React, { useCallback } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Container, Content } from './styles';

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

                <button onClick={ handleGoBack }>
                    Voltar
                    <FaArrowLeft size={ 21 } />
                </button>
            </Content>
         </Container>
  );
}

export default Error;