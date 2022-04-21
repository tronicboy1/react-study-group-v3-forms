import RefFormInput from "./component";

export type InputConfig = {
  name: string;
  helpText?: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
};

export default RefFormInput;
