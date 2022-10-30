import styled from "styled-components";
export const TesteContainer = styled.div`
    width: 32rem;
    height: 11rem;
    background-color: #f5f5f5;
    border: 1px solid #bebebe;
    border-radius: 8px;
    padding: 0px 24px 0px 24px;
`
export const Informations = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    .numberInformation{
        color: #480CA8;
        font-size: 108px;
        font-weight: 700;
    }
    .textInformation{
        color: #666666;
        font-size: 20px;
    }
`
export const Vizinhos = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -30px;
    
    a{
        font-weight: bold;
        color: #480ca8;
        cursor: pointer;
    }
`