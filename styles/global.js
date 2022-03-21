import { createGlobalStyle } from 'styled-components';



export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "MontserratAltReg";
  src: url("/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}


@font-face {
  font-family: "MontserratAltB";
  src: url("/fonts/Montserrat_Alternates/MontserratAlternates-Black.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    
  }
  body {
    display: flex;
    background: black;
    color: white;
  }

  h1 {
  font-family: MontserratAltB;
}

p{
  font-family: MontserratAltReg, sans-serif;

}

a {
  text-decoration: none;
}
  `