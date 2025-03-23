import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme.tsx";
import {useState} from "react";
import {Link} from "react-scroll";


export const MobileMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const onBurgerClick = () => { setMenuOpen(!menuOpen); };

    const items = [
        {
            title: "Tech Stack",
            href: "skills",
        },
        {
            title: "Projects",
            href: "projects",
        },
        {
            title: "Contacts",
            href: "contacts",
        },
    ]


    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={menuOpen} onClick={onBurgerClick}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopUp isOpen={menuOpen} onClick={() => setMenuOpen(false)} >
                <ul>
                    {items.map((arrayItems, index) => {
                        return <li key={index}>
                            <StyledMenuMobileLink
                                activeClass='active'
                                to={arrayItems.href}
                                smooth={true}>
                                {arrayItems.title}
                            </StyledMenuMobileLink>
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
    background-color: rgba(30, 30, 30, 0.93);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    transition: .8s ease-in-out;

    


    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
    `}
  
    ul {
        display: flex;
        gap: 80px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const StyledMenuMobileLink = styled(Link)`

    color: ${Theme.colors.fontsSecondary};
    font-size: 35px;
    font-weight: bold;
    line-height: 130%;
    cursor: pointer;


    &:active {
        background: linear-gradient(-90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`