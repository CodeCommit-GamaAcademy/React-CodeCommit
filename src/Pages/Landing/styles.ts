import styled from 'styled-components';

import Model from '../../assets/background-landing-1.png';


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 85vh;
    background-image: url(${Model});
    background-size: 700px;
    background-position:center bottom;
    background-repeat: no-repeat;

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    
    position: absolute;
    width: 481px;
    height: 173px;
    margin-top: -250px;
    

    p{
        font-size:29px;
        color: #fff;
        margin-left: 180px;
        font-weight: normal;
        line-height: 34px;
        font-style: normal;
    }

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 180px;
    top: 449px;
    width: 261px;
    height: 42px;
    background: #FFFFFF;
    border-radius: 20px;
    border: none;
    font-size: 17px;
    font-weight: 500;
    color: #8C52E5;
    padding: 20px;
`

export const Header = styled.header`

    img{
        margin-left: 63px;
        margin-top: 52px;
    }
`



