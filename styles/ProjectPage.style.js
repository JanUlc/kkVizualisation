import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
@media (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
}
`

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 1440px) {
    width:20%;
}
`

export const HeaderWrap = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 1439px) {
    align-items: center;
}
`

export const ImageWrapper = styled.div`
flex:1;
`

export const Title = styled.div`
flex:1;
font-size: 1.5em;
@media (min-width: 1440px) {
    margin-left: 0.4em;
}
@media (min-width: 2560px) {
    font-size: 3em;
}
`

export const Description = styled.div`
flex:1;
text-align: justify;
padding: 0.5em;
@media (min-width: 2560px) {
    font-size: 1.8em;
}
`


export const Style = styled.div`
flex:1;
font-size: 2em;
@media (min-width: 1440px) {
    margin-left: 0.2em;
}
`

