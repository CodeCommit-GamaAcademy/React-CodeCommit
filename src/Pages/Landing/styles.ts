import styled from 'styled-components';

import Model from '../../assets/background-landing-1.png';


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    background-image: url(${Model});
    background-position: center bottom;
    background-repeat: no-repeat;
`;


export const CardLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
left: 180px;
top: 351px;
position: absolute;
`


export const TextContainer = styled.div`
    p{
        width: 281px;
        height: 173px;
        font-size:29px;
        color: #fff;
        font-weight: normal;
        line-height: 34px;
        font-style: normal;
    }

    span { 
        display: block;
        margin-top: 20px;
    }

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 42px;
    background: #FFFFFF;
    border-radius: 20px;
    border: none;
    font-size: 17px;
    font-weight: 500;
    color: #8C52E5;
    padding: 20px;
    margin-top:25px;
`

export const Img = styled.img`
position: absolute;
left: 65px;
height: 65px;
top: 58px;

`



