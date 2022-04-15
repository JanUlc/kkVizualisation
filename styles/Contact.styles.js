import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1439px) {
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0.5em;
@media (min-width: 768px) {
  width:80%;
}
@media (min-width: 1024px) {
  width: 60%;
}
@media (min-width: 1440px) {
  width:40%;
  margin-left: 10em;
}
@media (min-width: 2560px) {
  width:40%;
  margin-left: 16em;
  margin-top: 9em;
}
`

export const Title = styled.div`
flex:1;
font-size: 1em;
@media (min-width: 1440px) {
  font-size: 1.5em;
}
@media (min-width: 2560px) {
  font-size: 3em;
}
`

export const Description = styled.div`
flex:1;
font-size: 0.8em;
@media (min-width: 1440px) {
  font-size: 1em;
}
@media (min-width: 2560px) {
  font-size: 1.8em;
}
`

export const FormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (min-width: 375px) {
  padding: 2em;
}
@media (min-width: 1440px) {
  justify-content: flex-end;
  margin-right: 18em;
}
@media (min-width: 2560px) {
  justify-content: flex-end;
  margin-right: 30em;
}
`