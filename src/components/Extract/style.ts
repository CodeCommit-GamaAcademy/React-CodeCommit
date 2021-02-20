import styled from 'styled-components';

export const ExtractContainer = styled.div`
    background-color: #FBFBFB;
    border-radius: 8px;
    height: 300px;
    margin-top: 35px;
    padding: 30px 20px;
    width: 60%;
    overflow-y: auto;

    .title-container {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
            margin-top: 5px;
            margin-left: 15px;
        }
    }

    img {
        height: 27px;
        width: 27px;
    }

    p {
        color: #9B9B9B;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
        margin-left: 25px;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const ExtractItem = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 5% 70% 20%;
    justify-items: initial;
    margin-top: 30px;
    width: 100%;

    .text-items {
        p {
            font-size: 16px;
            margin: 7px 0;
        }

        strong {
            :first-child {
                font-size: 14px;
            }

            :last-child {
                font-size: 20px;
            }
        }
    }

    p {
        color: #9B9B9B;
        margin: 0;
        padding: 0;
    }

    .date {
        font-size: 12px;
        justify-self: center;
    }

    @media screen and (max-width: 900px){
        grid-template-columns: 15% 60% 20%;
    }
`
