import styled from 'styled-components';

export const PlansContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 120px;
    height: 450px;
    padding: 30px;
    gap: 40px;
    width: 80%;
    min-width: 270px;
    margin-bottom: 100px;
    margin-top: 100px;
    overflow-y: auto;

    @media screen and ( max-width: 1200px ) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        height: 100%;
        gap: 0px;
    }
`

export const CardPlans = styled.div`
    padding: 30px;
    width: 100%;
    border: 1px solid #CCC;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title-card {
        color: #212529;
        font-weight: 500;
        text-transform: uppercase;
    }

    p {
        color: #6C757D;
    }

    .type-movement {
        color: #212529;
    }

    &.addCard {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        transition: background .4s;

        .icon {
            color: #8C52E5;

            transition: color .4s;
        }

        &:hover {
            background: #8C52E5;

            .icon {
                color: #fff;
            }
        }
    }

    @media screen and (max-width: 900px) {
        margin-top: 20px;
    }
`
