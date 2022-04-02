import React from "react";
import { StyledMenu } from "./Menu.styles";
import Link from "next/link";

import { useRouter } from 'next/router'

function ActiveLink({ children, href, setOpenMenu }) {
  const router = useRouter()

  const handleClick = (e) => {
    router.push(href)
    setOpenMenu(false);
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  )
}


const Menu = ({openMenu, setOpenMenu}) => {
  return (
    <StyledMenu openMenu={openMenu}>
      <ActiveLink id="home" href={`/`} setOpenMenu={setOpenMenu} >
       <a>Home</a>
      </ActiveLink>
      <ActiveLink id="projects" href={`/projects`} setOpenMenu={setOpenMenu}>
        <a>Projects</a>
      </ActiveLink>
      <ActiveLink id="about" href={`/about`} setOpenMenu={setOpenMenu}>
        <a>About</a>
      </ActiveLink>
      <ActiveLink id="contact" href={`/contact`} setOpenMenu={setOpenMenu}>
        <a>Contact</a>
      </ActiveLink>
    </StyledMenu>
  );
};
export default Menu;
