import styled from "styled-components";
import {Container} from "../../../components/container/Container.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {MainTittle, MainTittleGradient} from "../main/Main.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {StyledButton} from "../../../components/buttonForm/ButtonForm.tsx";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";



export const FormContact = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return;

        emailjs
            .sendForm('service_4tipxwh', 'template_fpujs7u', form.current, {
                publicKey: 'h21KKm2pyEnr5XHA6',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };


    return (
        <StyledFormContact id="contacts">
            <Container>
                <FlexWrapper justify='space-between' gap='50px' align={'center'} wrap={'wrap'}>

                    <MainTittle>
                        FOR ANY QUESTIONS
                        <MainTittleGradient>PLEASE CONTACT ME:</MainTittleGradient>
                    </MainTittle>

                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <InputWrapper>
                            <Field type='text' placeholder={'Your name'} required name={'name'}/>
                        </InputWrapper>
                        <InputWrapper>
                            <Field type='email' placeholder={'Your email address'} required name={'email'}/>
                        </InputWrapper>
                        <InputWrapper>
                            <Field as={'textarea'} placeholder={'Your message'} required name={'message'}/>
                        </InputWrapper>

                        <StyledButton type={'submit'}>
                            Send
                            <Icon iconId={'pointer'} viewBox={'0 0 30 30'} height={'30px'} width={'30px'}/>
                        </StyledButton>
                    </StyledForm>

                </FlexWrapper>
            </Container>
        </StyledFormContact>
    );
};

const StyledFormContact = styled.section`
    background-color: #1e1e1e;
    position: relative;
    
    ${FlexWrapper}{
        @media screen and (max-width: 1180px){
            justify-content: center;
        }
    }
    
    
    @media ${Theme.media.mobile} {
        h2{
            font-size: 34px;
        }
    }
    
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;

    textarea {
        resize: none;
        height: 100px;
    }
    
    @media screen and (max-width: 1178px){
        max-width: 600px;
    }
    
`

const InputWrapper = styled.div`
    
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 2px;
        background: rgb(66, 68, 110);
        bottom: -4px;
    }
    
    &:hover::before {
        background: linear-gradient(10deg, #13b0f5 2.6%, #e70faa 100%);
    }
`

const Field = styled.input`
    width: 100%;
    padding: 10px 5px;

    font-family: "Poppins", sans-serif;
    background-color: transparent;
    border: none;
    color: ${Theme.colors.font};
    vertical-align: bottom;

    font-weight: 300;
    font-size: 18px;
    line-height: 1.45;

    &::placeholder {
        color: ${Theme.colors.font};
        text-transform: capitalize;
        vertical-align: bottom;
    }

    //&:focus-visible {
    //    outline: 1px solid rgba(66, 68, 110, 0.51);;
    //}

`
