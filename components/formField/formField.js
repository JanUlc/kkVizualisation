import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledInput = styled.input`
  padding: 0.7em 0.7em;
  font-size: 1em;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1em;
  border: 0.15em solid white;
  ::placeholder {
    color: black;
  }
  :hover {
    ::placeholder {
      color: white;
    }
  }
  margin: 1.2em 1.2em;
`;

const FormField = React.forwardRef(
  ({ onChange, name, id, placeholder, ...props }, ref) => {
    return (
      <Wrapper>
        <StyledInput
          name={name}
          id={id}
          {...props}
          ref={ref}
          placeholder={placeholder}
        />
      </Wrapper>
    )
  }
);

export default FormField;
