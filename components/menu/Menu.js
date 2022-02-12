import React from "react";
import { StyledMenu } from "./Menu.styles";

const Menu = ({openMenu}) => {
  return (
    <StyledMenu openMenu={openMenu}>
      <a id="home" href={`/`}>
        Home
      </a>
      <a id="projects" href={`/projects`}>
        Projects
      </a>
      <a id="about" href={`/about`}>
        About
      </a>
      <a id="contact" href={`/contact`}>
        Contact
      </a>
    </StyledMenu>
  );
};
export default Menu;
