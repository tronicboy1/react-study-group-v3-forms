import React from "react";
import { InputConfig } from "../RefFormInput";
import styles from "./styles.module.css";

const InputComponent: React.FC<{
  config: InputConfig;
  value: string;
  onInput: (value: string) => void;
}> = ({ config, value, onInput }) => {
  const errorId = config.error ? `${config.name}-error-text` : "";
  const helpTextId = config.helpText ? `${config.name}-help-text` : "";

  return (
    <div className={styles.group}>
      <label htmlFor={config.name}>
        {config.label} {config.required && <i aria-hidden>*</i>}
      </label>
      <div className={styles["input-row"]}>
        <input
          id={config.name}
          name={config.name}
          type={config.type ?? "text"}
          onChange={(event) => onInput(event.currentTarget.value)}
          value={value}
          aria-describedby={errorId + helpTextId}
          aria-required={config.required}
          autoComplete={config.autoComplete}
        />
        {config.helpText && (
          <span id={`${config.name}-help-text`}>{config.helpText}</span>
        )}
      </div>
      {config.error && (
        <p role="alert" className={styles.error}>
          {config.error}
        </p>
      )}
    </div>
  );
};

export default InputComponent;
