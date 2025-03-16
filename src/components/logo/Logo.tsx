import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const Logo = () => {
    return (
        <LogoLink href="#">
            <Icon iconId={'logo'} width={'60'} height={'60'} viewBox={'-4 -7 60 60'} />
        </LogoLink>
    );
};

const LogoLink = styled.a`
    padding: 0 10px;
`
