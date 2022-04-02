import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 320px) {
    flex-direction: column;
  }
`;
export const ColWrapper = styled.div`
  /*position: relative;
display: flex;
width: 18vw;
height: 70vh;
padding: 0em 0.5em;
margin: 0 0.5em;
transition: all .3s ease-in-out;
filter: blur(${(props) => (props.blured ? "0.5em" : "0em")});
:hover  {
   cursor: pointer; 
   transform: scale(1.05) ;
}*/
  @media (min-width: 320px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 2em 0.5em;
    height: 100%;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em 0.5em;
`;
export const TextOnImage = styled.div`
  position: absolute;
  font-family: RobotoLight;
  color: white;
  writing-mode: vertical-lr;
  text-orientation: use-glyph-orientation;
  opacity: 0;
  @media (min-width: 320px) {
    font-size: 50px;
    width: 80%;
    height: 85%;
  }

  transition: all 0.3s ease-in;
  :hover {
    opacity: 100%;
  }
`;
