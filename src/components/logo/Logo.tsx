import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll"

export const Logo = () => {
    return (
        <LogoLink onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={'logo'} width={'60'} height={'60'} viewBox={'-4 -7 60 60'} />
        </LogoLink>
    );
};

const LogoLink = styled.a`
    padding: 0 10px;
    cursor: pointer;
    
`
