import styled from "styled-components";

export const WrapperForm = styled.form`
  flex: 1;
  flex-direction: column;
  height: 25em;
  max-width: 16.5em;
  align-items: center;
  padding: 0.7em 0.7em;
  border: 0.15em solid white;
  margin: 4em 0em 0em 25em;
  backdrop-filter: blur(1em);
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.5);
`;

export const Button = styled.button`
  font-size: 1em;
  background: transparent;

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

export const Message = styled.textarea`
  font-size: 1em;
  background: transparent;
  background: radial-gradient(
    circle,
    hsl(0, 0%, 100%, 0),
    hsl(0, 0%, 0%, 0.5) 100%
  );
  border: 0.2em solid white;

  :hover {
    border: 0.15em solid black;
  }
  margin: 1.2em 1.5em;
  color: white;
  resize: none;
  height: 200px;
  padding: 0em 2.3em;
`;
