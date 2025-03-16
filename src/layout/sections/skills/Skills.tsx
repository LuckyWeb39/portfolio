import {SectionTittle} from "../../../components/sectionTittle/SectionTittle.tsx";
import {SectionDescription} from "../../../components/sectionDescription/SectionDiscription.tsx";
import {Skill} from "../../../components/skill/Skill.tsx";
import styled from "styled-components";
import {Container} from "../../../components/container/Container.tsx";


const skillsItems = [
    {
        title:  'html5',
        viewBox: '0 0 120 120',
    },
    {
        title:  'css',
        viewBox: '0 0 120 120',
    },
    {
        title:  'ts',
        viewBox: '0 0 120 120',
    },
    {
        title:  'js',
        viewBox: '0 0 120 120',
    },
    {
        title:  'react',
        viewBox: '-3 -10 120 120',
    },
    {
        title:  'redux',
        viewBox: '-7 -9 120 120',
    },
    {
        title:  'Native',
        viewBox: '0 -7 120 120',
    },
    {
        title:  'github',
        viewBox: '0 -2 120 120',
    },
    {
        title:  'git',
        viewBox: '0 0 120 120',
    },
    {
        title:  'VSCode',
        viewBox: '-2 0 120 120',
    },
    {
        title:  'styledComponents',
        viewBox: '0 0 120 120',
    },
    {
        title:  'greensock',
        viewBox: '2 0 120 120',
    },
    ];

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTittle tittle={'My Tech Stack'}/>
                <SectionDescription description={' Technologies I’ve been working with recently'}/>
                <Skill skillIcon={skillsItems}/>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #1e1e1e;
    width: 100%;
    min-width: 375px;
`