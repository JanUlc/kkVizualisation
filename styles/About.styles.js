import styled from "styled-components";

export const ImageWrapper = styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
margin-top:4em;
margin-left:2em;
margin-right: 8em;
`
export const Border = styled.div`
display: flex;
border: 0.3em solid white;
height: 650px;
width: 500px;
justify-content: center;
align-items: center;
`

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
//border: 0.3em solid white;
margin-left: 10em;
width: 110ch;

`
export const NameWrapper = styled.div`
display: flex;
flex:1;
flex-direction: column;
margin: 1em 2em 0em 2em;
width: 75ch;
//border: 0.3em solid white;
`
export const Name = styled.div`
display: flex;
font-family: "MontserratAltB";
font-size: 8em;
color: white;
justify-content: ${props => props.justify};
//border: 0.01em solid red;
`
export const DescriptionWrapper = styled.div`
display: flex;
//border: 0.3em solid white;
justify-content: flex-end;
margin-bottom: 4.5em;
`
export const Description = styled.div`
display: flex;
//border: 0.3em solid red;
font-family: "MontserratReg";
font-size: 1.3em;
color: white;
height: 25ch;
width: 50ch;
text-align: justify;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
margin-top: 3em;
justify-content: center;
`