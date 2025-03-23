import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {Theme} from "../../styles/Theme.tsx";

export const ContactIcons = () => {
    return (
        <StyledContactIcons>
            <li>
                <a href="https://github.com/LuckyWeb39" target="_blank">
                    <Icon iconId={'githubContact'} width={'30px'} height={'30px'} viewBox={'0 0 30 30'}/>
                </a>
            </li>
            <li>
                <a href="https://t.me/Lycky_Lukas" target="_blank">
                    <Icon iconId={'twitter'} width={'30px'} height={'30px'} viewBox={'2 2 28 28'}/>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon iconId={'linkedin'} width={'30px'} height={'30px'} viewBox={'0 0 30 30'}/>
                </a>
            </li>

        </StyledContactIcons>
    );
};


const StyledContactIcons = styled.ul`
    display: flex;
    align-items: flex-end;
    gap: 20px;


    svg {
        fill: #A7A7A7;

        &:hover {
            fill: #13B0F5FF;
            transform: scale(1.2);
        
    }


    @media ${Theme.media.tablet} {
        display: none;
    }
`

