import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const SectionTittle = (props: {tittle:string}) => {
    return (
        <StyledSectionTittle>
            {props.tittle}
        </StyledSectionTittle>
    );
};

const StyledSectionTittle = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 0.54167;
    text-align: center;
    color: ${Theme.colors.font};
    margin-bottom: 50px;

    @media ${Theme.media.mobile} {
        font-size: 40px;
        margin-bottom: 30px;
    }
`
