import React, { useId, useImperativeHandle, useState } from "react";
import Styled from "./styles.js";

const Input = React.forwardRef(
  ({ label, value, placeholder, onChange = (evt) => {} }, ref) => {
    const id = useId();

    const [inputValue, setInputValue] = useState(value);

    useImperativeHandle(ref, () => {
      return { inputValue };
    });

    return (
      <Styled key={id}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          type="text"
          id={id}
          placeholder={placeholder}
          value={inputValue}
          onChange={(evt) => {
            setInputValue(evt.target.value);
            onChange(evt);
          }}
        />
      </Styled>
    );
  }
);

export default Input;
