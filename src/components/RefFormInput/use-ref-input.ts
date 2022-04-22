import React, { useEffect, useRef, useState } from "react";

const useRefInput = (validator: (value: string) => boolean) => {
  const ref = useRef<HTMLInputElement>(null);
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validator(ref.current.value));
  }, [touched]);

  const onBlur = () => {
    setTouched(true);
  };

  return { ref, onBlur, isValid };
};

export default useRefInput;
