import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll"
import {useEffect, useState} from "react";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 200){
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        });
    }, [])

    return (

        <>
            {showBtn && (
                <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                    <Icon iconId={'goTop'} viewBox={'0 0 30 30'} width={'30'} height={'30'} />
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    
    cursor: pointer;
    border: none;
    background-color: transparent;
    
    
    position: fixed;
    right: 30px;
    bottom: 30px;

    svg {
        &:active, &:hover {
            transform: translateY(-4px);
            transition: all .5s ease;
        }

        background: linear-gradient(174deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
`