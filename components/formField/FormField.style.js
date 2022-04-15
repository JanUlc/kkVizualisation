import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledInput = styled.input`
  padding: 0.7em 0.7em;
  font-size: 1em;
  background-color: transparent;
  border-radius: 1em;
  border: 0.15em solid white;
  ::placeholder {
    color: gray;
  }
  :hover {
    background-color: white;
    opacity: 30%;
    color: black;
  }
  margin: 1.2em 1.2em;
  @media (min-width: 2560px) {
    font-size: 1.8em;
  }
`;