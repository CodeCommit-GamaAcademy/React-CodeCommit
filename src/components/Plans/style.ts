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


// Modal Styles

export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw; 

    background-color: rgba(0, 0, 0, .6);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    position: relative;

    width: calc(100% - 50px);
    max-width: 700px;
    min-width: 330px;
    background-color: #f0f0f0;

    padding: 40px; 

    h1 {
        margin-bottom: 40px;

        color: #444444;

        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
            margin-right: 8px;
        }
    }

    & > .icon {
        position: absolute;
        top: 10px;
        left: 10px;

        cursor: pointer;
    }
`

export const ModalForm = styled.form`
    display: grid;
    grid-template-rows: 1fr;
    row-gap: 30px;

    textarea {
        min-height: 80px;
        max-height: 200px;
        resize: vertical;

        &:focus, &:not(:empty) {
            border: 1px solid #68de5a;
        }
    }

    input {
        border: 0;
        border-bottom: 1px solid #444444;
        
        &:focus {
            border-bottom: 1px solid #68de5a;
        }
    }

    input, textarea {
        padding: 3px 9px;

        font-size: 22px;
    }

    button {
        padding: 20px 18px;

        border: 0;
        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #f0f0f0;

        background: #8C52E5;

        font-size: 20px;

        transition: .3s;

        &:hover {
            filter: brightness(.8);
        }
    }
`