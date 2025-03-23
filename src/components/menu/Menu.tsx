import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";
import {Link} from "react-scroll"

const items = [
    {
        title: "Tech Stack",
        href: "skills",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contacts",
        href: "contacts",
    },
]

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                {items.map((arrayItems, index)=>{
                    return <li key={index}>
                        <StyledMenuLink
                            activeClass='active'
                            to={arrayItems.href}
                            smooth={true}
                            spy={true}
                           >
                            {arrayItems.title}
                        </StyledMenuLink>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    
    @media ${Theme.media.tablet} {
        display: none;
    }
    
ul {
    display: flex;
    gap: 50px;
    align-items: center;
}
`

const StyledMenuLink = styled(Link)`
    color: ${Theme.colors.fontsSecondary};
    font-size: 20px;
    line-height: 130%;
    cursor: pointer;
    

    &:hover, &.active {
        background: linear-gradient(-90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
