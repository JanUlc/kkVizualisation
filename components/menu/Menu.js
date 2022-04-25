import React from "react";
import { StyledMenu } from "./Menu.styles";
import Link from "next/link";

const MenuLink = ({ setOpenMenu, children, ...props }) => (
  <Link {...props} >{children}</Link>
);

const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <StyledMenu openMenu={openMenu}>
      <MenuLink id="home" href={`/`} setOpenMenu={setOpenMenu}>
        <a onClick={() => setOpenMenu(!openMenu)}>Home</a>
      </MenuLink>
      <MenuLink id="projects" href={`/projects`} setOpenMenu={setOpenMenu}>
        <a onClick={() => setOpenMenu(!openMenu)}>Projects</a>
      </MenuLink>
      <MenuLink id="about" href={`/about`} setOpenMenu={setOpenMenu}>
        <a onClick={() => setOpenMenu(!openMenu)}>About</a>
      </MenuLink>
      <MenuLink id="contact" href={`/contact`} setOpenMenu={setOpenMenu}>
        <a onClick={() => setOpenMenu(!openMenu)}>Contact</a>
      </MenuLink>
    </StyledMenu>
  );
};
export default Menu;
