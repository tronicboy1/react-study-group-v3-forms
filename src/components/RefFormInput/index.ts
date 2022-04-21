import React from "react";
import RefFormInput from "./component";

export type InputConfig = {
  name: string;
  helpText?: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
  required?: boolean;
  autoComplete?: string;
};

export default RefFormInput;
