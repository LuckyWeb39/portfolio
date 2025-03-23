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
import {TagsProjects, TagsStatusType} from "../../../components/tagsProjects/TagsProjects.tsx";
import {useState} from "react";
import { AnimatePresence, motion } from "motion/react"


const ProjectStack: Array<{status: TagsStatusType, title: string }> = [
    {
        title: "All",
        status: "All",
    },
    {
        title: "React",
        status: "React",
    },
    {
        title: "JS",
        status: "JS",
    },
    {
        title: "SPA",
        status: "SPA",
    },

]

type ProjectPropsType = {
    id: number,
    img: string,
    title: string,
    description: string,
    link: string,
    linkGithub: string,
    type: string,
}

const projectsData: ProjectPropsType[] = [
    {
        id: 1,
        img: proj1,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        link:'#',
        linkGithub:'#',
        type:'React',

    },
    {
        id: 2,
        img: proj2,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        link:'#',
        linkGithub:'#',
        type:'React',

    },
    {
        id: 3,
        img: proj3,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        link:'#',
        linkGithub:'#',
        type:'JS',

    },
    {
        id: 4,
        img: proj4,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        link:'#',
        linkGithub:'#',
        type:'JS',

    },
    {
        id: 5,
        img: proj5,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        link:'#',
        linkGithub:'#',
        type:'SPA',

    },
    {
        id: 6,
        img: proj6,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        link:'#',
        linkGithub:'#',
        type:'SPA',

    },
]

export const Projects = () => {

    const [filterStatus, setFilterStatus] = useState('All')
    let filteredProjects = projectsData

    if (filterStatus === 'React') {
        filteredProjects = projectsData.filter(project => project.type === 'React' )
    }
    if (filterStatus === 'JS') {
        filteredProjects = projectsData.filter(project => project.type === 'JS' )
    }
    if (filterStatus === 'SPA') {
        filteredProjects = projectsData.filter(project => project.type === 'SPA' )
    }

    function changeFilterStatus(value: TagsStatusType) {
        setFilterStatus(value)
    }

    return (
        <StyledProject id="projects">
            <Container>
                    <SectionTittle tittle={'Projects'}/>
                    <SectionDescription description={'Things I’ve built so far'}/>
                    <TagsProjects ProjectStack={ProjectStack}
                                  changeFilterStatus={changeFilterStatus}
                                  filterStatus={filterStatus}/>
                <GridWrapper>
                    <AnimatePresence>
                    {
                        filteredProjects.map(project => (
                            <motion.div
                                layout={true}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                exit={{opacity:0}}
                                key={project.id}
                            >
                                <Project
                                    key={project.id}
                                    img={project.img}
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                    linkGithub={project.linkGithub}
                                    type={project.type}
                                />
                            </motion.div>

                        ))
                    }
                    </AnimatePresence>
                </GridWrapper>
            </Container>
        </StyledProject>
    );
};



const StyledProject = styled.section`
    
    width: 100%;
    min-width: 375px;
    position: relative;
    
    
    ${StyledSectionDescription}{
        margin-bottom: 50px;
    }
    
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));;
    justify-items: center;
    grid-row-gap: 65px;
    grid-column-gap: 45px;
    align-items: start;

    @media screen and (max-width: 1250px){
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-items: center;
        grid-row-gap: 50px;
    }
    @media screen and (max-width: 820px){
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-items: center;
        grid-row-gap: 50px;
    }
`