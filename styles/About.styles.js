import styled from "styled-components";

export const ImageWrapper = styled.div`
display: flex;
margin:0.3em;
`
export const Border = styled.div`
/*display: flex;
border: 0.3em solid white;
height: 650px;
width: 500px;
justify-content: center;
align-items: center;*/
`

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
//border: 0.3em solid white;
justify-content: center;
`
export const NameWrapper = styled.div`
display: flex;
flex-direction: column;
//border: 0.3em solid white;
`
export const Name = styled.div`
flex:1;
font-size: 2em;
color: white;
//justify-content: ${props => props.justify};
//border: 0.01em solid red;
`
export const DescriptionWrapper = styled.div`
display: flex;
//border: 0.3em solid white;
justify-content: flex-end;
`
export const Description = styled.div`
flex:1;
//border: 0.3em solid red;
font-size: 0.8em;
color: white;
text-align: justify;
margin: 0.3em;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`