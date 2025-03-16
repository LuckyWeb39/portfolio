import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const StyledButton = styled.button`

    margin-left: 10px;

    display: flex;
    align-items: center;
    gap: 15px;

    max-width: 150px;
    width: 100%;

    background-color: transparent;
    border: none;
    color: ${Theme.colors.font};

    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.45;

    stroke: ${Theme.colors.font};

    cursor: pointer;

    &:hover {
        transition: all .4s ease;

        svg {
            transform: translateX(10px);
            transition: all .4s ease;
    }
    
        
        
        background: linear-gradient(174deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        stroke: rgb(231, 15, 170);
    }

    &:active {
            animation: jump 0.3s; /* Запуск анимации при нажатии */
        }

        @keyframes jump {
            0% {
                transform: translateY(0); /* Начальная позиция */
            }
            50% {
                transform: translateY(-5px); /* Подпрыгиваем вверх на 20px */
            }
            100% {
                transform: translateY(0); /* Возвращаемся обратно */
            }

`