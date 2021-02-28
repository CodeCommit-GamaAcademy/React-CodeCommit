import styled from 'styled-components';

export const CardItem = styled.div`
    background: #8C52E5;
    border-radius: 5px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    height: 90px;
    justify-content: space-around;
    padding: 10px;
    width: 90px;



    &.card-selected {
        border: 2px solid #FFF;
    }

    img {
        height: 28px;
        width: 28px;
    }

    span {
        font-size: 12px;
    }

    :hover {
        cursor: pointer;
    }

    @media ( max-width: 900px ) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: initial;

        height: 55px;

        img {
            height: 16px;
            width: 16px;
        }

        span {
            margin-left: 12px;
        }
    }
`
