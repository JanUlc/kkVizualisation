import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  left: 0;
  top: 0;
  position: absolute;
  text-align: left;
  background: black;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  transform: ${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: 425px) {
    width: 100%;
  }

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(18, 18, 18, 0.3) 100%
  );
  backdrop-filter: blur(0.8em);

  a {
    font-family: RobotoLight;
    font-size: 1.3em;
    text-transform: uppercase;
    padding-bottom: 2em;
    padding-left: 0.3em;
    font-weight: bold;
    letter-spacing: 0.5em;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 425px) {
      font-size: 1.3em;
      text-align: center;
      padding: 1em 0;
    }
    @media (min-width: 2560px) {
      font-size: 1.5em;
      padding-bottom: 3em;
      padding-left: 0.5em;
    }

    &:hover {
      color: #666666;
    }
  }
`;
