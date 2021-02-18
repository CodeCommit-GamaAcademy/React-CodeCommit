import React, { useState } from 'react';

import { ExtractContainer, ExtractItem } from './style';
import currentIcon from '../../assets/svgs/current-icon.svg';
import creditCardsIcon from '../../assets/svgs/credit-cards-icon.svg';
import { Conta } from '../../types/dash-board';

interface ExtractData {
    contaBanco?: Conta,
    contaCredito?: Conta,
}

const Extract: React.FC<ExtractData> = ( props ) => {
    // const [ allLauchs, setAllLaunchs ] = useState( () => {
    //     if (props.contaBanco?.lancamentos && props.contaCredito?.lancamentos) {
    //         return [...props.contaBanco.lancamentos, ...props.contaCredito.lancamentos]
    //     }else {
    //         return [];
    //     }
    // });
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
