import React from "react";
import { InputConfig } from ".";
import styles from "./styles.module.css";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  { config: InputConfig }
>(({ config }, ref) => {
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
          aria-describedby={errorId + helpTextId}
          aria-required={config.required}
          autoComplete={config.autoComplete}
          ref={ref}
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
});

export default InputComponent;
