import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  label: string;
  ariaLabel?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  style?: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  ariaLabel,
  disabled = false,
  type = "button",
  size = "medium",
  style = "secondary"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel || label}
      disabled={disabled}
      data-size={size}
      data-type={type}
      data-style={style}
      className={`
        ${styles.button} 
        ${disabled ? styles.disabled : ''}
        ${size === "small" ? styles.small : ''}
        ${size === "medium" ? styles.medium : ''}
        ${size === "large" ? styles.large : ''}
      `}
    >
      {label}
    </button>
  );
};

export default Button;