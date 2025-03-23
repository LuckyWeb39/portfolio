import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

type TagsProjectsPropsType = {
    ProjectStack: Array<{status: TagsStatusType, title: string }>,
    changeFilterStatus: (value:TagsStatusType) => void,
    filterStatus: string,
}

export type TagsStatusType = 'All' | 'React' | 'JS' | 'SPA'

export const TagsProjects = (props: TagsProjectsPropsType) => {
    return (
        <StyledTagsProjects>
            {props.ProjectStack.map((item: { status: TagsStatusType; title: string }, index: number) => {
                return <li key={index}>
                    <StyledTabsLink as={'button'}
                                    onClick={ () => {props.changeFilterStatus(item.status)}}
                                    active={props.filterStatus === item.status}>
                        {item.title}
                    </StyledTabsLink>

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
`

const StyledTabsLink = styled.a<{active:boolean}>`
    
        color: ${Theme.colors.fontsSecondary};
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 25px;
        line-height: 0.85;
        background-color: transparent;
        border: none;
    cursor: pointer;

        position: relative;

        &::before {
            content: "";
            display: inline-block;
            background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
            width: 0;
            height: 3px;
            position: absolute;
            bottom: -3px;
            
            ${props => props.active && css<{active:boolean}>`
                width: 100%;
            `}

        }

        &:hover {
            &::before {
                transition: all .4s ease;
                width: 100%;
            }
        }
`




//     <StyledProject>
//     <Container>
//     <SectionTittle title={'Projects'} />
// <SectionDescription description={'Things I’ve built so far'} />
// <TagsProjects ProjectStack={ProjectStack} />
// <GridWrapper>
//     {filteredProjects.map((project, index) => (
//         <Project
//             key={index}
//             img={project.img} // Предположительно, у вашего объекта проекта есть свойство img
//             title={project.title} // Иметь в объекте title
//             description={project.description} // Также, описание
//             link={project.link} // И ссылка на проект
//             linkGithub={project.linkGithub} // И ссылка на GitHub
//             type={project.status} // Статус проекта
//         />
//     ))}
// </GridWrapper>
// </Container>
// </StyledProject>
// );
// };