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
`;

export const Button = styled.button`
  font-size: 1em;
  background: transparent;
  border-radius: 1em;
  border: 0.15em solid white;
  :hover {
    background-color: white;
    opacity: 30%;
    color: black;
    cursor: pointer;
  }
  padding: 0.7em 1.5em;
  color: gray;
  margin: 7em 5em;
`;

