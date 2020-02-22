import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const ItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;         
    
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    ${ItemContainer}:hover & {        
        opacity: 0.8;
    }

`;

export const FooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 10%;
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    ${ItemContainer}:hover & {
        opacity: 0.85;
        display: flex;
    }
`;
