import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const Skill = (props:{skillIcon:Array<object>}) => {
    return (
        <GridWrapperSkills >
            {props.skillIcon.map((skill:object, index:number)=>{
                return <Icon iconId={skill.title} viewBox={skill.viewBox} key={index}/>
            })}
        </GridWrapperSkills>
    );
};

const GridWrapperSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    grid-row-gap: 100px;
    
    @media ${Theme.media.tablet}{
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        row-gap: 70px;
    }
    @media ${Theme.media.mobile}{
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        row-gap: 40px;
    }
`
