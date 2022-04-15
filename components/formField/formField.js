import React from "react";
import {Wrapper, StyledInput} from './FormField.style';

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
