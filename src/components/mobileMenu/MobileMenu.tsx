import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopUp isOpen={true}>
                <ul>
                    {props.menuItems.map((arrayItems: string, index: number) => {
                        return <li key={index}>
                            <a href={'#'}>{arrayItems}</a>
                        </li>
                    })}
                </ul>
            </MobileMenuPopUp>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${Theme.media.tablet} {
        display: block;
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    background-color: transparent;
    border: none;
    position: fixed;
    top: -110px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background: linear-gradient(-90deg, #13b0f5 2.6%, #e70faa 100%);
        left: 40px;
        bottom: 50px;
        position: absolute;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background: linear-gradient(-90deg, #13b0f5 2.6%, #e70faa 100%);
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background: linear-gradient(-90deg, #13b0f5 2.6%, #e70faa 100%);
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(30, 30, 30, 0.89);
    z-index: 9999;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        align-items: center;
        justify-content: center;
    `}
    
    a {
        color: ${Theme.colors.fontsSecondary};
        font-size: 35px;
        font-weight: bold;
        line-height: 130%;

        &:hover {
            background: linear-gradient(-90deg, #13b0f5 2.6%, #e70faa 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

    }

    ul {
        display: flex;
        gap: 80px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`