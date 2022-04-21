import InputComponent from "./InputComponent";

const RefFormInput = InputComponent;

export type InputConfig = {
  name: string;
  helpText?: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
};

export default RefFormInput;
