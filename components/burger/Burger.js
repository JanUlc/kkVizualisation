import React from 'react';
import { StyledBurger } from './Burger.styles';

const Burger = ({ openMenu, setOpenMenu}) => {
  return (
    <StyledBurger openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;