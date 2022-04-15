import styled from "styled-components";
import Image from "next/image";

export const ImageWrapper = styled.div`
  display: flex;
  margin: 0.3em;
  @media (min-width: 768px) {
    margin: 1em;
  }

`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //border: 0.3em solid white;
  justify-content: center;
  @media (min-width: 768px) {
    padding-top: 2em;
    padding-left: 1em;
    justify-content: flex-start;
    width: 50%;
  }
  @media (min-width: 1440px) {
    padding-top: 1em;
    justify-content: flex-start;
    width: 50%;
  }
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //border: 0.3em solid white;
`;

export const Name = styled.div`
flex:1;
font-size: 2em;
color: white;
@media (min-width: 768px) {
    margin-left:0.2em;
}
@media (min-width: 1440px) {
    font-size:2.5em;
    :nth-child(2) {
    margin-left: 3em;
}
}
@media (min-width: 2560px) {
    font-size:4.5em;
    :nth-child(2) {
    margin-left: 2.5em;
}
}
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  //border: 0.3em solid white;
  justify-content: flex-end;
  @media (min-width: 1024px) {
    width: 90%;
  }
`;
export const Description = styled.div`
  flex: 1;
  //border: 0.3em solid red;
  font-size: 0.8em;
  color: white;
  text-align: justify;
  margin: 0.3em;
  @media (min-width: 1440px) {
    margin-left: 19em;
  }
  @media (min-width: 2560px) {
    font-size: 1.2em;
  }
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 768px) {
    flex-direction: row;
}
@media (min-width: 1440px) {
    justify-content: center;
}
@media (min-width: 2560px) {
    margin-top: 15em;
}
`;
