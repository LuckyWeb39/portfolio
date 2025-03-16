import {Project} from "../../../components/project/Project.tsx";
import proj1 from '../../../assets/images/proj1.png'
import proj2 from '../../../assets/images/proj2.png'
import proj3 from '../../../assets/images/proj3.png'
import proj4 from '../../../assets/images/proj4.png'
import proj5 from '../../../assets/images/proj5.png'
import proj6 from '../../../assets/images/proj6.png'
import {SectionTittle} from "../../../components/sectionTittle/SectionTittle.tsx";
import {
    SectionDescription,
    StyledSectionDescription
} from "../../../components/sectionDescription/SectionDiscription.tsx";
import styled from "styled-components";
import {Container} from "../../../components/container/Container.tsx";
import {TagsProjects} from "../../../components/tagsProjects/TagsProjects.tsx";

const ProjectStack = ['All', 'React', 'JS', 'SPA']

export const Projects = () => {
    return (
        <StyledProject>
            <Container>
                    <SectionTittle tittle={'Projects'}/>
                    <SectionDescription description={'Things I’ve built so far'}/>
                    <TagsProjects ProjectStack={ProjectStack}/>
                <GridWrapper>
                    <Project
                        img={proj1}
                        title={'Project Tile goes here'}
                        description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        link={'#'}
                        linkGithub={'#'}/>
                    <Project
                        img={proj2}
                        title={'Project Tile goes here'}
                        description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        link={'#'}
                        linkGithub={'#'}/>
                    <Project
                        img={proj3}
                        title={'Project Tile goes here'}
                        description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        link={'#'}
                        linkGithub={'#'}/>
                    <Project
                        img={proj4}
                        title={'Project Tile goes here'}
                        description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        link={'#'}
                        linkGithub={'#'}/>
                    <Project
                        img={proj5}
                        title={'Project Tile goes here'}
                        description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        link={'#'}
                        linkGithub={'#'}/>
                    <Project
                        img={proj6}
                        title={'Project Tile goes here'}
                        description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        link={'#'}
                        linkGithub={'#'}/>
                </GridWrapper>
            </Container>
        </StyledProject>
    );
};



const StyledProject = styled.section`
    width: 100%;
    min-width: 375px;
    
    ${StyledSectionDescription}{
        margin-bottom: 50px;
    }
    
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));;
    justify-items: center;
    grid-row-gap: 65px;
    grid-column-gap: 45px;
    align-items: start;

    @media screen and (max-width: 1250px){
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-items: center;
        grid-row-gap: 50px;
    }
    @media screen and (max-width: 820px){
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-items: center;
        grid-row-gap: 50px;
    }
`