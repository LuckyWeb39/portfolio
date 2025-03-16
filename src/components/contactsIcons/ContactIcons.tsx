import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {Theme} from "../../styles/Theme.tsx";

export const ContactIcons = () => {
    return (
        <StyledContactIcons>
            <li>
                <a href="#">
                    <Icon iconId={'githubContact'} width={'30px'} height={'30px'} viewBox={'0 0 30 30'}/>
                </a>
            </li>
            <li>
                <a href="#">
                    <Icon iconId={'twitter'} width={'30px'} height={'30px'} viewBox={'1 1 30 30'}/>
                </a>
            </li>
            <li>
                <a href="#">
                    <Icon iconId={'linkedin'} width={'30px'} height={'30px'} viewBox={'0 0 30 30'}/>
                </a>
            </li>
        </StyledContactIcons>
    );
};


const StyledContactIcons = styled.ul`
    display: flex;
    align-items:flex-end;
    gap: 20px;
    
    @media ${Theme.media.tablet} {
        display: none;
    }
`
