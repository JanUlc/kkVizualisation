import styled from "styled-components";



export const StyledBurger = styled.button`
  position: absolute;
  top: 4%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, openMenu }) => openMenu ? '#666666' : theme.primaryLight};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ openMenu }) => openMenu ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ openMenu }) => openMenu ? '0' : '1'};
      transform: ${({ openMenu }) => openMenu ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ openMenu }) => openMenu ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
