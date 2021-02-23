import React from 'react';
import { Container, MessageContainer } from './style'



const MenuModal: React.FC = ( props ) => {
  return (
   <Container>
      <MessageContainer>
        <text>Confirmação</text>
        <p>Tem certeza que deseja sair?</p>
        <div>
        </div>
      </MessageContainer>
    </Container>
  );
}

export default MenuModal;