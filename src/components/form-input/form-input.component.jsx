import React from "react";

import {
  FormGroupContainer,
  FormInputContainer,
  FormLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <FormGroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormLabel className={props.value.length ? "shrink" : ""}>
          {label}
        </FormLabel>
      ) : null}
    </FormGroupContainer>
  );
};

export default FormInput;
