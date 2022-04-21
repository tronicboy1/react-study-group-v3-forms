import React, { useRef } from "react";

const useRefInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return { ref };
};

export default useRefInput;
