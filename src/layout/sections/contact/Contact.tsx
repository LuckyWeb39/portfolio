import styled from "styled-components";
import {MainTittle, MainTittleGradient} from "../main/Main.tsx";
import {Container} from "../../../components/container/Container.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <MainTittle>For any questions please contact me:</MainTittle>
                    <MainTittleGradient><a href={'https://github.com/LuckyWeb39'}>LuckyWeb39</a></MainTittleGradient>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    
`
