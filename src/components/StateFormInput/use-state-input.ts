import React, { useState } from "react";

const useStateInput = (validator: (value: string) => boolean) => {
  const [value, setValue] = useState("");

  const isValid = validator(value);

  const handleInput: React.ChangeEventHandler = (event) => {
    if (event.currentTarget instanceof HTMLInputElement) {
      const newValue = event.currentTarget.value.trim();
      setValue(newValue);
    }
  };

  return { value, isValid, handleInput };
};

export default useStateInput;
