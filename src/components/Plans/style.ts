import styled from 'styled-components';

export const PlansContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 120px;
    height: 450px;
    padding: 30px;
    overflow: auto;
    width: 70%;
    margin-bottom: 100px;
    margin-top: 100px;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        height: 100%;
        width: 90%;
    }
`

export const CardPlans = styled.div`
    border: 1px solid #CCC;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    width: 100%;

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
    
`
