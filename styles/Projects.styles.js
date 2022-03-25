import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
margin: 3em 0;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100vw;
height: 70vh;
@media only screen and (max-width: 425px) {
  flex-direction: column;
}
`
export const ColWrapper = styled.div`
position: relative;
display: flex;
width: 18vw;
height: 70vh;
padding: 0em 0.5em;
margin: 0 0.5em;
transition: all .3s ease-in-out;
filter: blur(${props => props.blured ? '0.5em' : '0em'});
:hover  {
   cursor: pointer; 
   transform: scale(1.05) ;
}
`
export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0em 0.5em;
h1 {
 font-family: MontserratAltB;

}
a {
 font-family: MontserratAltReg;
 color: white;
}
`
export const TextOnImage = styled.div`
flex: 1;
position: absolute;
font-family: MontserratAltB;
   color: white;
   font-size: 80px;
   writing-mode: vertical-lr;
   text-orientation: use-glyph-orientation;
   opacity: 0;
   width: 95%;
   height: 100%;
   
   transition: all .3s ease-in;
   :hover {
       opacity: 100%;
   }
`