import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100vw;
margin: 3em 0;
`
export const ImageWrapper = styled.div`
display: flex;
justify-content: flex-end;
position: absolute;
`
export const ImageContent = styled.div`
display: flex;
flex-direction: column;
width: 70%;
align-items: center;
justify-content: flex-end;
position: relative;
`

export const TextWrapper = styled.div`
justify-content: flex-start ;
position: absolute;
`

export const TextPosition = styled.div`
width: 30%;
padding: 12rem 7rem;
`

export const TextContent = styled.div`
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 70%, rgba(0,0,0,0.6502976190476191) 100%);
border: 5px solid white;
padding: 1em 1em;
overflow: auto;
a{
    color: white;
    font-family: MontserratAltReg, sans-serif;
}
`
export const BtnChangeImage = styled.button`
background-color: white;
width: 10px;
height: 10px;
margin: 0em 1em;
border: none;
:hover {
    cursor: pointer;
    transform: scale(1.5);
}
`
export const BtnWrapper = styled.div`
position: absolute;
`
