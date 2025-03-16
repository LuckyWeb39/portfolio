import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

type PropsDescription = {
    description:string,
    margin?: number,
}

export const SectionDescription = (props: PropsDescription) => {
    return (
        <StyledSectionDescription>
            {props.description}
        </StyledSectionDescription>
    );
};

export const StyledSectionDescription = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.2;
    text-align: center;
    color: ${Theme.colors.fontsSecondary};
    margin-bottom: 100px;
    
    @media ${Theme.media.mobile} {
        font-size: 30px;
    }
`
