import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 426px ) {
   flex-direction: column;
  }
`;
export const ColWrapper = styled.div`
  position: relative;
  display: flex;
  width: 21vw;
  height: 80vh;
  padding: 0em 0.05em;
  margin: 0 0.05em;
  transition: all 0.3s ease-in-out;
  filter: blur(${(props) => (props.blured ? "0.5em" : "0em")});
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  @media (max-width: 426px) {
     width: 96%;
     margin-bottom: 1em;
  }
`;

export const TextOnImage = styled.div`
  position: absolute;
  font-family: RobotoRegular;
  color: black;
  writing-mode: vertical-lr;
  text-orientation: use-glyph-orientation;
  opacity: 0;
  transition: all 0.3s ease-in;
  :hover {
    opacity: 100%;
  }
  @media (min-width: 1024px) {
    font-size: 6.5em;
    padding-left: 0.1em;
    padding-top: 0.1em;
    width: 95%;
    height: 99%;
  }
`;

export const ImageWrapper = styled.div`
display: flex;
height: 80vh;
margin: 0.1em;
`