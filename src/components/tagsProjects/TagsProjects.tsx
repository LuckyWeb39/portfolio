import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const TagsProjects = (props: { ProjectStack: Array<string> }) => {
    return (
        <StyledTagsProjects>
            {props.ProjectStack.map((arrayItems: string, index: number) => {
                return <li key={index}>
                    <a href={'#'}>{arrayItems}</a>
                </li>
            })}
        </StyledTagsProjects>
    );
};

const StyledTagsProjects = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;

    margin-bottom: 40px;

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 0.8125;

    a {
        color: ${Theme.colors.fontsSecondary};
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 25px;
        line-height: 0.85;

        position: relative;

        &::before {
            content: "";
            display: inline-block;
            background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
            width: 0;
            height: 3px;
            position: absolute;
            bottom: 5px;

        }

        &:hover {
            &::before {
                transition: all .4s ease;
                width: 100%;
            }
        }
        
    }

`