import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
@media (max-width: 1024px) {
    flex-direction: column;
}
`

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const HeaderWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ImageWrapper = styled.div`
flex:1;
`

export const Title = styled.div`
flex:1;
font-size: 2em;
`

export const Description = styled.div`
flex:1;
text-align: justify;
padding: 0.5em;
`


export const Style = styled.div`
flex:1;
font-size: 2em;
`

