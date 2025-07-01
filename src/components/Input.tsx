import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  name?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  name,
  disabled = false,
}) => {
  const inputId = name || Math.random().toString(36).substring(2, 9);
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label} htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        className={styles.input + (error ? " " + styles.inputError : "")}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        disabled={disabled}
        autoComplete="off"
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
