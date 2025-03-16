import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.tsx";
import {AnimationLink} from "../AnimationLink.tsx";

type ProjectPropsType = {
    img: string,
    title: string,
    description: string,
    link: string,
    linkGithub: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProjectCard>

            <ProjectImage src={props.img} alt={props.title}/>

            <ProjectInfoWrapper>
                <ProjectTitle>{props.title}</ProjectTitle>

                <ProjectDescription>{props.description}</ProjectDescription>

                <FlexWrapper justify="space-between">

                    <ProjectLink href={props.link}>
                        <AnimationLink/>
                        {/*<Icon iconId={'link'} height={'20px'} width={'20px'} viewBox={'0 0 20 20'}/>*/}
                        Live Preview
                    </ProjectLink>

                    <ProjectLinkGithub href={props.linkGithub}>
                        <Icon iconId={'githubLink'} height={'20px'} width={'20px'} viewBox={'0 0 20 20'}/>
                        View Code
                    </ProjectLinkGithub>

                </FlexWrapper>
            </ProjectInfoWrapper>

        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.article`
    font-family: "Poppins", sans-serif;
    border-radius: 20px;
    width: 100%;
    box-shadow: 2px 2px 10px 0 rgba(124, 122, 122, 0.2);
    background: #363636;
    
    @media ${Theme.media.desktop} {
        max-width: 375px;
    }

`
const ProjectImage = styled.img`
    border-radius: 20px 20px 0 0;
    //max-width: 375px;
    width: 100%;
    
`

const ProjectInfoWrapper = styled.div`
padding: 30px;
    max-width: 375px;
`

const ProjectTitle = styled.h3`
    font-weight: 600;
    font-size: 28px;
    line-height: 0.93;
    text-align: center;
    color: #ccc;
    margin-bottom: 30px;

    @media ${Theme.media.mobile} {
        font-size: 25px;
    }
    
`
const ProjectDescription = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.4;
    color: #ccc;
    margin-bottom: 30px;

`
const ProjectLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
    stroke: #FCFCFC;

    &:hover {
        transition: all .5s ease;
        
        background: linear-gradient(-90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;


        svg{
            .bottomLink {
                transition: transform 0.3s ease; /* Плавный переход */
                transform: translate(-1px, 1px); /* Движение вверх на 1 пиксел */
            }
            .topLink {
                transition: transform 0.3s ease; /* Плавный переход */
                transform: translate(1px, -1px); /* Движение вверх на 1 пиксел */
            }

        }


        stroke: rgb(231 15 170);
        
    }
    
    display: flex;
    gap: 10px;
    align-items: center;
`


const ProjectLinkGithub = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
    fill: #FCFCFC;
    

    &:hover {
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        fill: rgb(231 15 170);
        
    }
    
    display: flex;
    gap: 10px;
    align-items: center;

`

