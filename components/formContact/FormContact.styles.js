import styled from "styled-components";

export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.15em solid white;
  border-radius: 1em;
  box-shadow: 0 0em 0.5em rgba(129, 124, 124, 0.5);
  //background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 90%);
  background: rgba(1, 1, 1, 0.8);
  backdrop-filter: blur(0.8em);
  margin: 1em;
  width: 260px;
  padding: 2em;
  @media (max-width: 375px) {
    padding: 0.5em;
  }
  @media (min-width: 2560px) {
    width: 480px;
  }
`;

export const Button = styled.button`
  align-self: center;
  font-size: 1em;
  background: transparent;
  border-radius: 1em;
  border: 0.15em solid white;
  margin: 1em 0;
  :hover {
    background-color: gray;
    color: white;
    cursor: pointer;
    border: 0.15em solid transparent;
  }
  padding: 0.7em 1.5em;
  color: gray;
  @media (min-width: 2560px) {
    font-size: 1.8em;
  }
`;
