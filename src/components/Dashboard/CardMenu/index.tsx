import React, { HTMLAttributes } from 'react';

import { CardItem } from './style';
import pixIcon from '../../../assets/svgs/pix-icon.svg';

interface ComponentProp extends HTMLAttributes<HTMLDivElement> {
    title: string;
    selected: boolean
}

const CardMenu: React.FC<ComponentProp> = ( { selected, ...props } ) => {

    return (
        <>
            <CardItem { ...props } className={selected ? 'card-selected' : ''}>
                <img src={pixIcon} alt="pix icon" />
                <span>{props.title}</span>
            </CardItem>
        </>
    )
}

export default CardMenu;
