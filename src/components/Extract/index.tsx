import React from 'react';

import { ExtractContainer, ExtractItem } from './style';
import currentIcon from '../../assets/svgs/current-icon.svg';
import creditCardsIcon from '../../assets/svgs/credit-cards-icon.svg';

const Extract: React.FC = () => {
    return(
        <>
            <ExtractContainer>
                <div className="title-container">
                    <img src={currentIcon} alt="current icon"/>
                    <p>Últimos lançamentos</p>
                </div>

                <ExtractItem>
                    <img src={creditCardsIcon} alt="credit cards icon"/>
                    <div className="text-items">
                        <strong>Compra no débito</strong>
                        <p>Gama Academy</p>
                        <strong>R$: 298,55</strong>
                    </div>
                    <p className="date">Dia 24 Jan.</p>
                </ExtractItem>
            </ExtractContainer>
        </>
    )
}

export default Extract;
