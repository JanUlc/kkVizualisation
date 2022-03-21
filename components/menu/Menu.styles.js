import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(179, 179, 179, 0.09567577030812324) 100%
  );
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ openMenu }) => openMenu ? 'translateX(0)' : 'translateX(-100%)'};
  backdrop-filter: blur(0.7em);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-family: MontserratAltReg, sans-serif;
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #666666 ;
  }
  }


`;