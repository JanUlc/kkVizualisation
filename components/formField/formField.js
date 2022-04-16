import React from "react";
import {Wrapper, StyledInput} from './FormField.style';

export default function FormField() {
  return (React.forwardRef(
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
  ))
} ;
