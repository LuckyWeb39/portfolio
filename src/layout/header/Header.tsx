import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import {ContactIcons} from "../../components/contactsIcons/ContactIcons.tsx";
import {Container} from "../../components/container/Container.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {MobileMenu} from "../../components/mobileMenu/MobileMenu.tsx";




export const Header = () => {
    return (
        <StyledHeader>
            <Container>
               <FlexWrapper justify='space-between' align='center'>
                   <Logo/>
                       <Menu/>
                       <ContactIcons/>
                   <MobileMenu/>
               </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: rgba(25, 25, 25, 0.59);
`
