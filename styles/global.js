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

@font-face {
  font-family: "RobotoLight";
  src: url("/fonts/Roboto/Roboto-Light.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "RobotoRegular";
  src: url("/fonts/Roboto/Roboto-Regular.ttf");
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
    background: black;
    color: white;
  }

  h1 {
  font-family: RobotoRegular;
  margin-top:0.2em;
  margin-bottom: 0.2em;
}
p{
  font-family: RobotoLight, sans-serif;
  margin: 0.3em;
}

a {
  text-decoration: none;
}
  `