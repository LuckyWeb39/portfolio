import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((arrayItems: string, index: number)=>{
                    return <li key={index}>
                        <a href={'#'}>{arrayItems}</a>
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
        
    
    
    a {
        color: ${Theme.colors.fontsSecondary};
        font-size: 20px;
        line-height: 130%;
        

        &:hover {
            background: linear-gradient(-90deg, #13b0f5 2.6%, #e70faa 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
    }
ul {
    display: flex;
    gap: 50px;
    align-items: center;
}
`
