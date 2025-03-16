import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import avatar from "../../../assets/images/MainPhoto.webp"
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/container/Container.tsx";
// import abstact from "../../../assets/images/Abstract.svg"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-around' align='center' wrap='wrap-reverse'>
                    <div>
                        <MainTittle>Hi &#128075;, </MainTittle>
                        <MainTittle>My name is</MainTittle>
                        <MainTittleGradient>Aleksand Lukomskiy</MainTittleGradient>
                        <MainTittleH1>A Web Developer.</MainTittleH1>
                    </div>
                    <AvatarBorderGradient>
                        <Avatar src={avatar}/>
                    </AvatarBorderGradient>


                </FlexWrapper>
            </Container>
        </StyledMain>

    );
};

const StyledMain = styled.section`
    min-height: 90vh;
    display: flex;

    
    
`

const AvatarBorderGradient = styled.div`
    position: relative;

    &::before {
        content: '';
        width: 370px;
        height: 370px;
        border-radius: 50%;
        background-image: linear-gradient(5deg, #13b0f5 2.6%, #e70faa 100%);
        background-size: cover;
        
        position: absolute;
        top: -10px;
        left: -11px;
        z-index: -1;
        

        @media ${Theme.media.mobile} {
            width: 300px;
            height: 300px;

            top: 25px;
            left: -5px;
        }
        
    } 
`

const Avatar = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;

    @media ${Theme.media.mobile} {
        width: 290px;
        height: 290px;
        margin-bottom: 40px;
        margin-top: 30px;
    }
    
`
export const MainTittle = styled.h2`
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${Theme.colors.font};
    text-align: left;
    
    @media ${Theme.media.mobile} {
        font-size: 30px;
    }

`
export const MainTittleGradient = styled.h2`
    text-align: left;
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media ${Theme.media.mobile} {
        font-size: 32px;
    }
`
const MainTittleH1 = styled.h1`
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: ${Theme.colors.font};
    
    @media ${Theme.media.mobile} {
        font-size: 39px;
    }
`
