import styled from "styled-components";

export const WrapperForm = styled.form`
  flex: 1;
  flex-direction: column;
  height: 25em;
  max-width: 16.5em;
  align-items: center;
  padding: 0.7em 0.7em;
  border: 0.15em solid white;
  border-radius: 1em;
  margin: 4em 0em 0em 25em;
  box-shadow: 0 1em 1.5em rgba(129, 124, 124, 0.5);
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 90%);
  backdrop-filter: blur(0.7em);
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

