import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
margin: 3em 0;
justify-content: center;
@media (min-width: 768px) {
    padding-top: 5em;
}
@media (min-width: 1440px) {
    padding-top: 2em;
}
@media (min-width: 2560px) {
    padding-top: 8em
}
`

export const TextWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

export const Title = styled.div`
flex: 1;
font-size: 2em;
text-align: center;
@media (min-width: 768px) {
    font-size: 2.5em;
}
@media (min-width: 1024px) {
    font-size: 3em;
}
@media (min-width: 2560px) {
    font-size: 5em;
}
`

export const Description = styled.div`
flex: 1;
font-size: 0.8em;
text-align: justify;
margin: 0.3em;
@media (min-width: 768px) {
    font-size: 1em;
    margin: 0 5em;
}
@media (min-width: 1024px) {
    font-size: 1.1em;
}
@media (min-width: 1440px) {
    font-size: 1.2em;
    margin: 0 16em;
}
@media (min-width: 2560px) {
    font-size: 1.8em;
    margin: 0 22em;
}
`

