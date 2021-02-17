import React from 'react';

import { CardItem } from './style';
import pixIcon from '../svgs/pix-icon.svg';

const CardMenu: React.FC = () => {
    return (
        <>
            <CardItem>
                <img src={pixIcon} alt="pix icon" />
                <span>Depósitos</span>
            </CardItem>
        </>
    )
}

export default CardMenu;
