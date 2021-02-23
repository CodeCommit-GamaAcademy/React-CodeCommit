import React, { useEffect, useState } from 'react';

import { ExtractContainer, ExtractItem } from './style';
import currentIcon from '../../assets/svgs/current-icon.svg';
import creditCardsIcon from '../../assets/svgs/credit-cards-icon.svg';
import { Conta } from '../../types/dash-board';

interface ExtractData {
    contaBanco?: Conta,
    contaCredito?: Conta,
}

enum PlanosConta {
    R = 'Receitas',
    D = 'Despesas',
    TC = 'Trasferência entre contas',
    TU = 'Tranferência entre usuários'
}

const Extract: React.FC<ExtractData> = ( props ) => {
    const [ allLauchs, setAllLaunchs ] = useState( () => {      
        if (props.contaBanco?.lancamentos && props.contaCredito?.lancamentos) {
            return [...props.contaBanco.lancamentos, ...props.contaCredito.lancamentos]
        }else {
            return [];
        }
    });

    useEffect( () => {
        const orderedLauchs = allLauchs.slice().sort( (a, b) => {
            return Number(new Date(a.data)) - Number(new Date(b.data));
        }).reverse();
        
        setAllLaunchs(orderedLauchs);
    }, [ allLauchs ]);

    function typePlans(typePlan: string) {
        if(typePlan === 'R') {
            return PlanosConta.R;
        } else if(typePlan === 'D') {
            return PlanosConta.D;
        } else if(typePlan === 'TC') {
            return PlanosConta.TC;
        } else {
            return PlanosConta.TU;
        }
    }

    return(
        <>
            <ExtractContainer>
                <div className="title-container">
                    <img src={currentIcon} alt="current icon"/>
                    <p>Últimos lançamentos</p>
                </div>
                {allLauchs.length === 0 && 'Nenhum lancamento'}
                {allLauchs && allLauchs.map( (launch, index) => {
                    return (
                        <ExtractItem key={index}>
                            <img src={creditCardsIcon} alt="credit cards icon"/>
                            <div className="text-items">
                                <strong>{typePlans(launch.planoConta.tipoMovimento)}</strong>
                                <p>{launch.descricao}</p>
                                <strong>{launch.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>
                            </div>
                            <p className="date">{launch.data}</p>
                        </ExtractItem>
                    )
                })}
            </ExtractContainer>
        </>
    )
}

export default Extract;
