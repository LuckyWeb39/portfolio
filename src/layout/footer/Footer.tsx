import styled from "styled-components";
import {ContactIcons} from "../../components/contactsIcons/ContactIcons.tsx";
// import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../components/container/Container.tsx";
import {Theme} from "../../styles/Theme.tsx";

// const items = ['Tech Stack', 'Projects', 'Contacts']

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <TopFooter>
                    <Logo/>
                    <FlexWrapper align={'center'} wrap={'wrap'} justify={'flex-end'}>
                        <ContactsInfo href={"tel:+79689995899"}>+7 968 999 58 99</ContactsInfo>
                        <ContactsInfo href={"mailto:lukomskiy.ac@gmail.com"}>lukomskiy.ac@gmail.com</ContactsInfo>
                        <ContactIcons/>
                    </FlexWrapper>

                </TopFooter>
                <DownFooter>
                    <Copirate>Designed and built by <GradientCopirate>LuckyWeb39</GradientCopirate> with <GradientCopirate>Love</GradientCopirate> & <GradientCopirate>Coffee</GradientCopirate></Copirate>
                </DownFooter>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`
const TopFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    margin-bottom: 50px;

    position: relative;

    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: #42446e;
        top: 125px;
    }

`

const DownFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

const ContactsInfo = styled.a`
    margin-right: 30px;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
    
    &:hover {
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Copirate = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    text-align: center;
    color: #a7a7a7;

    @media ${Theme.media.mobile} {
        font-size: 13px;
    }
    
`

const GradientCopirate = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
