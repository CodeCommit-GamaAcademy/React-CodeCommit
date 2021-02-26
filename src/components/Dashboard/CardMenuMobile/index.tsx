import React from 'react';

import { CardItem } from './style';
import pixIcon from '../../assets/svgs/pix-icon.svg';

interface ComponentProp {
    title: string;
    func: Function;
}

const CardMenuMobile: React.FC<ComponentProp> = ( props ) => {

    const changeComponent = () => {
        props.func(props.title);
    }

    return (
        <>
            <CardItem onClick={changeComponent}>
                <img src={pixIcon} alt="pix icon" />
                <span>{props.title}</span>
            </CardItem>
        </>
    )
}

export default CardMenuMobile;
