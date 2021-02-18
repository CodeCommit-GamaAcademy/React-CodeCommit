import React from 'react';

import { CardItem } from './style';
import pixIcon from '../../assets/svgs/pix-icon.svg';

interface ComponentProp {
    title: string;
}

const CardMenu: React.FC<ComponentProp> = ( props ) => {
    return (
        <>
            <CardItem>
                <img src={pixIcon} alt="pix icon" />
                <span>{props.title}</span>
            </CardItem>
        </>
    )
}

export default CardMenu;
